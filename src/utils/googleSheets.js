// utils/googleSheets.js - FINAL WORKING VERSION

// ✅ Updated with NEW Version 5 URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbws5AcVbP5G4KgK4IOstCQlvyPL04oJzmM-N6mImUcVpZMo4XS70obfmaZgcfas6aLIsA/exec';

/**
 * Save booking data to Google Sheets
 */
export async function saveToGoogleSheets(data) {
  try {
    console.log('📤 Sending data to Google Sheets:', data);
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('✅ Data sent successfully to Google Sheets');
    return { success: true, message: 'Data sent' };
    
  } catch (error) {
    console.error('❌ Google Sheets error:', error);
    saveToLocalStorage(data);
    throw error;
  }
}

/**
 * Save to localStorage as backup
 */
function saveToLocalStorage(data) {
  try {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
      ...data,
      timestamp: new Date().toISOString(),
      synced: false
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    console.log('💾 Data saved to localStorage as backup');
    console.log('📊 Total local bookings:', bookings.length);
  } catch (error) {
    console.error('❌ localStorage error:', error);
  }
}

/**
 * Get all local bookings
 */
export function getLocalBookings() {
  try {
    return JSON.parse(localStorage.getItem('bookings') || '[]');
  } catch {
    return [];
  }
}

/**
 * Sync local bookings to Google Sheets
 */
export async function syncLocalBookings() {
  try {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const unsynced = bookings.filter(b => !b.synced);
    
    if (unsynced.length === 0) {
      console.log('✅ All bookings are synced');
      return { synced: 0 };
    }
    
    console.log(`🔄 Syncing ${unsynced.length} bookings...`);
    
    let syncedCount = 0;
    for (const booking of unsynced) {
      try {
        await saveToGoogleSheets(booking);
        booking.synced = true;
        syncedCount++;
        console.log(`✅ Synced: ${booking.bookingId}`);
      } catch (error) {
        console.error('Failed to sync booking:', booking.bookingId);
      }
    }
    
    localStorage.setItem('bookings', JSON.stringify(bookings));
    return { synced: syncedCount, total: unsynced.length };
    
  } catch (error) {
    console.error('❌ Sync error:', error);
    throw error;
  }
}

/**
 * Check if there are unsynced bookings
 */
export function hasUnsyncedBookings() {
  try {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    return bookings.some(b => !b.synced);
  } catch {
    return false;
  }
}

/**
 * Get total number of local bookings
 */
export function getLocalBookingsCount() {
  try {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    return bookings.length;
  } catch {
    return 0;
  }
}

/**
 * Clear all local bookings (for testing)
 */
export function clearLocalBookings() {
  try {
    localStorage.removeItem('bookings');
    console.log('🗑️ Local bookings cleared');
  } catch (error) {
    console.error('❌ Error clearing bookings:', error);
  }
}