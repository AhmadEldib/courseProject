import { Injectable, inject } from '@angular/core';
import { ApiURLsService } from '@app/Core/services';
import { Observable, map } from 'rxjs';
import { FirebaseService } from '@app/Core/services';
import { ref, set, push } from 'firebase/database';
import { createCategoty, ICategoryArray } from '@app/Shared/models/interfaces';

/**
 * Categories Service
 * 
 * This service manages CRUD operations for product categories in the admin panel.
 * It uses both direct Firebase SDK calls and the ApiURLsService for different operations:
 * - Direct Firebase SDK for writing operations (for better control)
 * - ApiURLsService for retrieval operations
 */
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  // Inject services for API and Firebase interactions
  private readonly apiService = inject(ApiURLsService);
  private readonly firebaseService = inject(FirebaseService);

  /**
   * Add a new category to the Firebase database
   * Uses direct Firebase SDK for better control over the write operation
   * and to generate a unique key via push()
   * 
   * @param category The category object to add
   * @returns Promise resolving to the created category with ID
   */
  async addCategories(category: createCategoty): Promise<ICategoryArray> {
    // Ensure user is authenticated before proceeding
    const isAuthenticated = await this.firebaseService.ensureAuthenticated();
    if (!isAuthenticated) {
      throw new Error('Authentication failed. Please try again.');
    }

    // Get database reference and create a new child node reference with auto-generated ID
    const db = this.firebaseService.getDatabase();
    const categoriesRef = ref(db, 'categories');
    const newCategoryRef = push(categoriesRef);
    
    try {
      // Write category data to the new reference
      await set(newCategoryRef, category);
      // Return the category with its new ID from Firebase
      return { ...category, id: newCategoryRef.key as string };
    } catch (error) {
      console.error('Error adding category:', error);
      throw error;
    }
  }

  /**
   * Retrieve all categories from the database
   * Uses ApiURLsService for data retrieval with RxJS transformation
   * 
   * @returns Observable of categories array with properly formatted objects
   * including IDs from Firebase keys
   */
  getCategories(): Observable<ICategoryArray[]> {
    return this.apiService.getRequest<{[key: string]: any}>('categories').pipe(
      map(response => {
        // Return empty array if no categories exist
        if (!response) return [];
        
        // Convert the Firebase object response (with keys as IDs) to an array of category objects
        return Object.entries(response).map(([key, value]) => ({
          id: key,  // Use the Firebase key as the category ID
          ...value  // Spread the rest of the category properties
        })) as ICategoryArray[];
      })
    );
  }
}
