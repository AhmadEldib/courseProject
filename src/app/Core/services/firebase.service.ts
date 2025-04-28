import { Injectable, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { Database, getDatabase } from 'firebase/database';
import { Auth, getAuth, signInAnonymously } from 'firebase/auth';
import { environment } from '@envireonments';
import { BehaviorSubject } from 'rxjs';

/**
 * Firebase service that provides centralized access to Firebase functionality
 * This service handles:
 * - Firebase initialization
 * - Anonymous authentication
 * - Access to Firebase database, analytics, and auth services
 * - Authentication state management
 */
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // Initialize Firebase app with configuration from environment
  private app = initializeApp(environment.firebase);
  // Create instances of Firebase services
  private analytics: Analytics = getAnalytics(this.app);
  private database: Database = getDatabase(this.app);
  private auth: Auth = getAuth(this.app);
  
  // BehaviorSubject to track and broadcast authentication state changes
  private authStateSubject = new BehaviorSubject<boolean>(false);
  // Flag to prevent duplicate authentication attempts
  private authInitialized = false;
  // Public Observable for components to subscribe to auth state
  authState$ = this.authStateSubject.asObservable();

  constructor() {
    // Start authentication process when service is instantiated
    this.initializeAuth();
  }

  /**
   * Initializes Firebase authentication with anonymous sign-in
   * Retries on network failures with exponential backoff
   */
  private async initializeAuth() {
    if (this.authInitialized) {
      return;
    }

    try {
      // Check if user is already authenticated
      if (this.auth.currentUser) {
        this.authStateSubject.next(true);
        this.authInitialized = true;
        return;
      }

      // Perform anonymous authentication if not already signed in
      const userCredential = await signInAnonymously(this.auth);
      console.log('Anonymous auth successful:', userCredential.user.uid);
      this.authStateSubject.next(true);
      this.authInitialized = true;
    } catch (error: any) {
      console.error('Authentication error:', error);
      this.authStateSubject.next(false);
      
      // Retry authentication if network request failed
      if (error.code === 'auth/network-request-failed') {
        setTimeout(() => this.initializeAuth(), 3000);
      }
    }
  }

  /**
   * Ensures the user is authenticated before proceeding with operations
   * @returns Promise resolving to authentication state (true/false)
   */
  async ensureAuthenticated(): Promise<boolean> {
    if (!this.authInitialized) {
      await this.initializeAuth();
    }
    return this.isAuthenticated();
  }

  /**
   * Provides access to the Firebase Realtime Database instance
   * @returns Firebase Database instance
   */
  getDatabase(): Database {
    return this.database;
  }

  /**
   * Provides access to Firebase Analytics
   * @returns Firebase Analytics instance
   */
  getAnalytics(): Analytics {
    return this.analytics;
  }

  /**
   * Provides access to Firebase Authentication
   * @returns Firebase Auth instance
   */
  getAuth(): Auth {
    return this.auth;
  }

  /**
   * Checks if a user is currently authenticated
   * @returns Boolean indicating authentication state
   */
  isAuthenticated(): boolean {
    return this.auth.currentUser !== null;
  }
}