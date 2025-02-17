const container = document.getElementById('container');
let gridSize = 16; // Initial grid size
let darkness = 0;

function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid

  const itemSize = 100 / size; // Calculate percentage size for each item

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${itemSize}%`;      // Set width
    gridItem.style.height = `${itemSize}%`;     // Set height (for square grid)
    container.appendChild(gridItem);

    gridItem.addEventListener("mouseover", function(){
        // const colors = ["red", "blue", "pink", "orange", "green", "white", "gray"]
        // const randomColors = colors[Math.floor(Math.random() * colors.length)];
        darkness += 0.1; // Increase darkness by 10%

        if (darkness > 1) {
            darkness = 1; // Cap at 1 (fully dark/colored)
        }

        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        // const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`


        // Calculate darkened color
        const darkenedR = Math.floor(randomR * (1 - darkness));
        const darkenedG = Math.floor(randomG * (1 - darkness));
        const darkenedB = Math.floor(randomB * (1 - darkness));
        const darkenedColor = `rgb(${darkenedR}, ${darkenedG}, ${darkenedB})`;
        gridItem.style.backgroundColor = darkenedColor;
    });

    gridItem.addEventListener("mouseout", function(){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`

        gridItem.style.backgroundColor = randomColor;
    });
  }
}

function changeGridSize() {
    let newSize = prompt("Enter grid size (max 100):", gridSize);

    if (newSize === null) {
        return;
    }

    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }

    gridSize = newSize;
    createGrid(gridSize);
}

createGrid(gridSize); // Initial grid creation