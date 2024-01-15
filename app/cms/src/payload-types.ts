/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    books: Book;
    categories: Category;
    'book-requests': BookRequest;
    'book-logs': BookLog;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: Settings;
  };
}
export interface User {
  id: number;
  fullName: string;
  firstName: string;
  email: string;
  role: string;
  sub: string;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Book {
  id: number;
  title: string;
  subtitle?: string | null;
  author: string;
  description?: string | null;
  categories?: (number | Category)[] | null;
  status: 'taken' | 'inStore';
  takenBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
}
export interface Category {
  id: number;
  title: string;
  updatedAt: string;
  createdAt: string;
}
export interface BookRequest {
  id: number;
  book: number | Book;
  user: number | User;
  action?: ('approve' | 'decline') | null;
  state?: ('stale' | 'approved' | 'declined') | null;
  type: 'take' | 'return';
  updatedAt: string;
  createdAt: string;
}
export interface BookLog {
  id: number;
  book: number | Book;
  user: number | User;
  action?: ('take' | 'return') | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface Settings {
  id: number;
  maxDaysRent?: number | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}