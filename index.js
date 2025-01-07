/**
 * Validate ISRC (International Standard Recording Code)
 * @param {string} isrc - The ISRC code to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateISRC(isrc) {
    const regex = /^[A-Z]{2}-?[A-Z0-9]{3}-?\d{2}-?\d{5}$/;
    return regex.test(isrc);
}

/**
 * Format song duration from seconds to MM:SS
 * @param {number} seconds - Song duration in seconds
 * @returns {string} - Formatted duration (MM:SS)
 */
function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Generate a unique release identifier
 * @param {string} artist - Artist name
 * @param {string} title - Song title
 * @returns {string} - A unique identifier for the release
 */
function generateReleaseID(artist, title) {
    const timestamp = Date.now();
    return `${artist.replace(/\s+/g, '-').toLowerCase()}-${title.replace(/\s+/g, '-').toLowerCase()}-${timestamp}`;
}

module.exports = {
    validateISRC,
    formatDuration,
    generateReleaseID,
};
