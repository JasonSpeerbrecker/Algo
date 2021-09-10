/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * 
 * Terms: n = songDurations.length.
 * O(1) = constant, one operation, no loop, doesn't change if n changes.
 * O(2) = constant, 2 operations, ...
 * O(n) = same # of operations as songDurations.length.
 *
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */

const busDuration1 = (300)
const songDurations1 = (20)

 function amazonMusicRuntime(busDuration, songDurations) {
    // O(1)
    let songPair = [-1, -1];
    // O(1)
    const targetDuration = busDuration - 30;
  
    // O(n)
    for (let i = 0; i < songDurations.length; i++) {
      // O(1)
      const songA = songDurations[i];
  
      // This line isn't exactly O(n) because i + 1, but the worst case is n - 1
      // so we focus on the worst case which is close enough to call it O(n).
      for (let j = i + 1; j < songDurations.length; j++) {
        // O(1)
        const songB = songDurations[j];
  
        // O(1)
        if (songA + songB === targetDuration) {
          // O(1)
          if (songPair[0] > -1) {
            // O(4). max has to check all 4.
            const max = Math.max(
              songA,
              songB,
              songDurations[songPair[0]],
              songDurations[songPair[1]]
            );
  
            // O(1)
            if (max === songA || max === songB) {
              // O(1)
              songPair = [i, j];
            }
          } else {
            // O(1)
            songPair = [i, j];
          }
        }
      }
    }
    // O(1)
    return songPair;
  }

console.log(amazonMusicRuntime(busDuration1,songDurations1));