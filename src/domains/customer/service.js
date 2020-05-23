import PROFILES from './profiles.json';
import InvalidProfileError from './invalid-profile-error';

export function getRandomProfile() {
  const rng = Math.random();

  function pickup(index, currentRng) {
    const currentProfile = PROFILES[index];
    const threshold = currentProfile['spawn-rate'];

    if (currentRng <= threshold) {
      return currentProfile;
    }
    return pickup(index + 1, currentRng - threshold);
  }

  return pickup(0, rng);
}

export function getProfileByName(name) {
  const profile = PROFILES.find(profile => profile.profile === name);

  if (profile) {
    return profile;
  }
  throw new InvalidProfileError(name);
}
