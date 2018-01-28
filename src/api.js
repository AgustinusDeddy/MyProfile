import { profile, experiences, educations, certifications } from "./data";

let cachedProfile = null;
let cachedExperiences = null;
let cachedEducations = null;
let cachedcertifications = null;

export function getProfiles() {
  return new Promise(res => {
    if (cachedProfile === null) {
      cachedProfile = profile;
      return setTimeout(() => res(cachedProfile), 400);
    }

    return res(cachedProfile);
  });
}

export function getCertifications() {
  return new Promise(res => {
    if (cachedcertifications === null) {
      cachedcertifications = certifications;
      return setTimeout(() => res(cachedcertifications), 400);
    }

    return res(cachedcertifications);
  });
}

export function getExperiences(id) {
  return new Promise(res => {
    if (cachedExperiences === null) {
      cachedExperiences = experiences;
      return setTimeout(
        () => res(id ? findExperience(id) : cachedExperiences), 800);
    }

    return res(id ? findExperience(id) : cachedExperiences);
  });
}

function findExperience(id) {
  return experiences.find(function(e) {
    return e.id == id;
  });
}

export function getEducations(id) {
  return new Promise(res => {
    console.log(educations)
    if (cachedEducations === null) {
      cachedEducations = educations;
      return setTimeout(
        () => res(id ? findEducation(id) : cachedEducations), 400);
    }

    return res(id ? findEducation(id) : cachedEducations);
  });
}

function findEducation(id) {
  return educations.find(function(e) {
    return e.id == id;
  });
}