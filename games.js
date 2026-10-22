// LAST GAME IS dungeons and degenerate gamble

let files = [];

// Fetch the directory contents using jsDelivr's GitHub API
async function loadGameFiles() {
  try {
    const response = await fetch("https://data.jsdelivr.com/v1/package/gh/CaptainCSS/caps-game-stash/contents");
    const data = await response.json();
    
    // Navigate through the jsDelivr directory tree to find your files folder
    // (Adjust the path if your folder structure is nested differently)
    const files = [];
    
    // Recursively or directly find the UGS-Files folder in the tree
    function searchFiles(node) {
      if (node.name === "UGS-Files" && node.files) {
        node.files.forEach(file => {
          let name = file.name;
          const lastDot = name.lastIndexOf('.');
          if (lastDot > 0) {
            name = name.substring(0, lastDot);
          }
          files.push(name);
        });
      }
      if (node.files) {
        node.files.forEach(searchFiles);
      }
    }
    
    searchFiles(data);
    
    // Fallback if data structure is a flat list or direct path
    // If the above doesn't catch it, we can also use the standard gh API since jsDelivr is usually for raw files, 
    // but wait—let's use the direct jsDelivr data endpoint format for listing:
    
    // Let's optimize this to use the standard GitHub contents API combined with jsDelivr for loading, 
    // OR use jsDelivr's data API cleanly:
    
  } catch (error) {
    console.error("Failed to load game files:", error);
  }
}