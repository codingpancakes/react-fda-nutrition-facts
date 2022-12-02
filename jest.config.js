// jest.config.js
module.exports = {
  verbose: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/']
};
