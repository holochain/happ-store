'use strict';

// -----------------------------------------------------------------
//  Public Functions
// Author : Zo-El
// -----------------------------------------------------------------

function createRatings({ rate, review, reviewedHash }) {
  const ratings = { rate, review, "author": App.Key.Hash };
  const hash = commit("ratings", ratings);
  commit("ratingsLink", {
    Links: [
      { Base: reviewedHash, Link: hash, Tag: 'ratings_tag' }
    ]
  });
  return hash;
}

function getRatings(reviewedHash) {
  return getLinks(reviewedHash, "ratings_tag", { Load: true }).map(e => e.Entry);
}


// -----------------------------------------------------------------
//  The Genesis Function https://developer.holochain.org/genesis
// -----------------------------------------------------------------

function genesis() {
  return true;
}

// -----------------------------------------------------------------
//  Validation functions for every change to the local chain or DHT
// -----------------------------------------------------------------

function validateCommit(entryName, entry, header, pkg, sources) {
  debug("entryName: " + entryName + " entry: " + entry + " header: " + header + " pkg: " + pkg + " sources: " + sources)
  switch (entryName) {
    case "ratings":
      return true;
    case "ratingsLink":
      return true;
    default:
      return false;
  }
}

function validatePut(entryName, entry, header, pkg, sources) {
  debug("entryName-->: " + entryName + " entry: " + entry + " header: " + header + " pkg: " + pkg + " sources: " + sources)
  switch (entryName) {
    case "ratings":
      return true;
    case "ratingsLink":
      return true;
    default:
      return false;
  }
}

function validateMod(entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    default:
      return false;
  }
}

function validateDel(entryName, hash, pkg, sources) {
  switch (entryName) {
    default:
      return false;
  }
}
function validateLink(entryName, baseHash, links, pkg, sources) {
  debug("entryName---->: " + entryName + " baseHash: " + baseHash + " links: " + links + " pkg: " + pkg + " sources: " + sources)
  debug("-->")
  switch (entryName) {
    case "ratingsLink":
      debug("HAHA")
      return true;
    default:
      debug("FALSE")
      return false;
  }
}
function validatePutPkg(entryName) {
  return null;
}
function validateModPkg(entryName) {
  return null;
}
function validateDelPkg(entryName) {
  return null;
}
function validateLinkPkg(entryName) {
  return null;
}
