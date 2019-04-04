module.exports = class ContentController {
  constructor(tileService) {
    this.tiles = tileService.getTilesData();
  }
};
