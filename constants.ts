
export enum MorphState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export const COLORS = {
  EMERALD_DEEP: '#0a1a15',    // Slightly warmer deep green
  EMERALD_BRIGHT: '#145c44',  // Muted, classy moss emerald
  GOLD_METAL: '#d4af37',      // Classic soft gold
  GOLD_SHINE: '#f4e1a1',      // Warm champagne/ivory light
  WHITE_GLOW: '#fffaf0',      // Floral white for warmth
  RUBY_RED: '#8b1a1a',        // Sophisticated deep crimson
  RUBY_BRIGHT: '#c04a4a'      // Softer ruby highlight
};

export const CONFIG = {
  PARTICLE_COUNT: 1800, // Reduced to make room for more physical objects
  ORNAMENT_COUNT: 120,  // Significantly increased
  GIFT_COUNT: 150,      // Increased for volume
  STAR_COUNT: 80,       // Increased for detail
  LIGHT_COUNT: 180,     // Increased for festive glow
  TREE_HEIGHT: 10.0,
  TREE_RADIUS: 4.2,
  SCATTER_RADIUS: 16,
  ANIMATION_SPEED: 0.04
};
