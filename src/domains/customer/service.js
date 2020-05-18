import * as fs from 'fs';
import * as path from 'path';

export async function getRandomProfile() {
  const profiles = await readProfiles();
  const rng = Math.random();

  function pickup(index, currentRng) {
    const currentProfile = profiles[index];
    const threshold = currentProfile['spawn-rate'];

    if (currentRng <= threshold) {
      return currentProfile;
    }
    return pickup(index + 1, currentRng - threshold);
  }

  return pickup(0, rng);
}

function readProfiles() {
  const filePath = path.join(__dirname, 'profiles.json');
  return new Promise((resolve, reject) => fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
      return reject(err);
    }
    resolve(JSON.parse(file));
  }));
}
