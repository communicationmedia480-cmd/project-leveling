/**
 * The sound file for when a task is completed.
 * This is the "Valorant ACE" sound effect from MyInstants.
 */
export const TASK_COMPLETE_SOUND = 'https://www.myinstants.com/media/sounds/valorant-ace-sound.mp3';

/**
 * Plays an audio file from a given source.
 * Includes error handling for browser autoplay policies.
 * @param soundSrc The source of the audio file (e.g., a file path or a data URI).
 */
export const playSound = (soundSrc: string) => {
  try {
    const audio = new Audio(soundSrc);
    // Setting volume to max as requested by the user.
    audio.volume = 1.0;
    audio.play().catch(error => {
      // Browsers might block autoplay. Log error silently in that case.
      console.log("Sound playback was prevented by the browser:", error);
    });
  } catch (error) {
    console.error("Could not create or play sound:", error);
  }
};
