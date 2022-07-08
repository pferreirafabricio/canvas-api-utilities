/**
 * @typedef Tile
 * @property {Number} x 
 * @property {Number} y 
 * @property {Number} width 
 * @property {Number} height
 * @property {Number} velocityInY
 * @property {string} imageSource
 * @property {string} color
 * @property {boolean} firstTile
 * @property {boolean} isInMiddle
 * @property {number} state
 * @property {Function} getBoxCollider
 */

/**
 * @typedef Collider
 * @property {Number} x 
 * @property {Number} y 
 * @property {Number} width 
 * @property {Number} height
 */

/**
 * Verify if two objects have collided
 * 
 * @param {Tile} object1
 * @param {Tile} object2
 * @returns {boolean}
 */
export function hasCollided(object1, object2) {
    if (!object1 || !object2) {
      console.error("One of the objects in collision is not set");
      return false;
    }

    /** @type {Collider} */
    const object1BoxCollier = object1.getBoxCollider();
    /** @type {Collider} */
    const object2BoxCollier = object2.getBoxCollider();

    if (!object1BoxCollier || !object2BoxCollier) {
      console.error("One of the objects in collision has not set their box collider");
      return false;
    }

    this.drawLine(
      object1BoxCollier.x,
      object1BoxCollier.y,
      object1BoxCollier.width,
      object1BoxCollier.height
    );

    this.drawLine(
      object2BoxCollier.x,
      object2BoxCollier.y,
      object2BoxCollier.width,
      object2BoxCollier.height
    );

    return (
      object1BoxCollier.x < object2BoxCollier.x + object2BoxCollier.width &&
      object1BoxCollier.x + object1BoxCollier.width > object2BoxCollier.x &&
      object1BoxCollier.y < object2BoxCollier.y + object2BoxCollier.height &&
      object1BoxCollier.y + object1BoxCollier.height > object2BoxCollier.y
    );
  }
