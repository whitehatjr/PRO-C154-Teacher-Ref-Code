// Registering component in Collider.js
AFRAME.registerComponent("flying-birds", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `hurdle${i}`;

      //position variables
      var posX = Math.floor(Math.random() * 3000 + -1000);
      var posY = Math.floor(Math.random() * 2 + -1);
      var posZ = Math.floor(Math.random() * 3000 + -1000);

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.flyingBirds(id, position);
    }
  },
  flyingBirds: (id, position) => {
    //Get the terrain element
    var terrainEl = document.querySelector("#terrain");

    //creating the bird model entity
    var birdEl = document.createElement("a-entity");

    //Setting multiple attributes
    birdEl.setAttribute("id", id);

    birdEl.setAttribute("position", position);
    birdEl.setAttribute("scale", { x: 500, y: 500, z: 500 });

    birdEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");

    //animated models
    birdEl.setAttribute("animation-mixer", {});

    //append the bird entity as the child of the terrain entity
    terrainEl.appendChild(birdEl);
  }
});


