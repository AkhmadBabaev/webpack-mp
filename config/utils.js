/* eslint-disable import/no-extraneous-dependencies */
const ip = require('ip');
const portUsed = require('port-used');

const packageJson = require('../package.json');

/**
 * @return {number} availabel port between 3000 and 65000.
 */
async function getAvailabelPort() {
  for (let port = 3000; port < 65000; port += 1) {
    // eslint-disable-next-line no-await-in-loop
    const isUsed = await portUsed.check(port, 'localhost');
    if (!isUsed) return port;
  }

  throw new Error('no availabel ports');
}

/**
 * @return {string} network ip address.
 */
function getNetworkIp() {
  const currentIP = ip.address();
  return ip.isPrivate(currentIP) && ip.isV4Format(currentIP) && currentIP;
}

/**
 * Parses a string into file components.
 *
 * @param {string} str - format of necessary files.
 * @return {object} file options - file(name.extension), name, extension.
 */
function parseFile(str) {
  const start = str.includes('/') ? str.lastIndexOf('/') + 1 : 0;
  const file = str.slice(start);
  const [name, extension] = file.split('.');
  return { file, name, extension };
}

module.exports = {
  projectName: packageJson.name,
  getAvailabelPort,
  getNetworkIp,
  parseFile,
};
