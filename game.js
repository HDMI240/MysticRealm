
// game.js

window.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loadingScreen");
    const loadingFill = document.getElementById("loadingFill");
    const gameContainer = document.getElementById("gameContainer");

    let loadProgress = 0;
    const loadingInterval = setInterval(() => {
        loadProgress += 1;
        loadingFill.style.width = `${loadProgress}%`;
        if (loadProgress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.style.display = "none";
                gameContainer.classList.add("loaded");
            }, 500);
        }
    }, 30);

    const player = document.getElementById("player");
    let position = { top: 50, left: 50 };

    function updatePlayerPosition() {
        player.style.top = `${position.top}%`;
        player.style.left = `${position.left}%`;
    }

    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp":
            case "w":
                position.top = Math.max(0, position.top - 1);
                break;
            case "ArrowDown":
            case "s":
                position.top = Math.min(100, position.top + 1);
                break;
            case "ArrowLeft":
            case "a":
                position.left = Math.max(0, position.left - 1);
                break;
            case "ArrowRight":
            case "d":
                position.left = Math.min(100, position.left + 1);
                break;
        }
        updatePlayerPosition();
    });

    const inventoryGrid = document.getElementById("inventoryGrid");
    for (let i = 0; i < 30; i++) {
        const slot = document.createElement("div");
        slot.className = "inventory-slot";
        inventoryGrid.appendChild(slot);
    }

    document.querySelectorAll(".resource-node").forEach(node => {
        node.addEventListener("click", () => {
            const type = node.dataset.type;
            alert(`Gathered from ${type}`);
        });
    });
});
