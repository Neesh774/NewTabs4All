<script lang="ts">
  import { indexString } from "./index_string";
  import { codeString } from "./siteCode";
  import Bookmarks from "./Bookmarks.svelte";
  import JSZip from "jszip";

  let username = "";
  let primaryColor = "#9ECE6A";
  let textLight = "#73DACA";
  let background = "#1A1B2C";
  let backgroundLight = "#202633";
  let bookmarks = [{
        name: "New Bookmark",
        icon: "ri-bookmark-fill",
        url: "https://google.com",
      }];

  function createFile() {
    let newFile = indexString.replace("USERNAME", username);

    newFile = newFile.replace("PRIMARYCOLOR", primaryColor);
    newFile = newFile.replace("TEXTLIGHT", textLight);
    newFile = newFile.replace("BACKGROUND", background);
    newFile = newFile.replace("BACKGROUNDLIGHT", backgroundLight);

    const newJS = codeString.replace(
      "const CARDS = [];",
      `const CARDS = ${JSON.stringify(bookmarks)};`
    );

    let HTMLblob = new Blob([newFile], { type: "text/html" });
    let JSblob = new Blob([newJS], { type: "text/javascript" });

    const zip = new JSZip();
    const folder = zip.folder("New Tab");
    folder.file("index.html", HTMLblob);
    folder.file("app.js", JSblob);

    zip.generateAsync({ type: "blob" }).then(function (content) {
      let link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "New Tab";
      link.click();
    });
  }
</script>

<svelte:head>
  <title>Create your New Tab</title>
</svelte:head>

<div class="page">
  <h1>New Tab Generator</h1>
  <p>
    After creating a new tab page for myself, I decided to create this generator
    to give everyone something to brag to their friends about :)
  </p>
  <p>
    Follow the steps below, and pretty soon you'll be able to get an awesome new tab page!
  </p>
  <p>Built by @Neesh774 on Twitter, @cheesyneesh on TikTok</p>
  <h2>Step One: Page Content</h2>
  <div class="input">
    <span>Your Name</span>
    <input
      type="text"
      id="username"
      bind:value={username}
      placeholder="Rick Astley"
    />
  </div>
  <h2>Step Two: Colors 🎨</h2>
  <div class="input">
    <span>Primary Color</span>
    <input type="color" id="backgroundImage" bind:value={primaryColor} />
  </div>
  <div class="input">
    <span>Text Light</span>
    <input type="color" id="backgroundImage" bind:value={textLight} />
  </div>
  <div class="input">
    <span>Background</span>
    <input type="color" id="backgroundImage" bind:value={background} />
  </div>
  <div class="input">
    <span>Background Light</span>
    <input type="color" id="backgroundImage" bind:value={backgroundLight} />
  </div>
  <h2>Step Three: Bookmarks 🔖</h2>
  <Bookmarks bind:bookmarks />
  <h2>Step Four: Download Your File 📂</h2>
  <button on:click={createFile}>Download ZIP</button>
  <p>After extracting your files, navigate to <code>index.html</code> in the new folder. Open it, make sure that the page looks correct, and then copy the URL in the address bar at the top.</p>
  <h2>Step Five: Download the Extension</h2>
  <p>You'll have to download a Chrome Extension to actually redirect to this page when you make a new tab. Download it <a href="https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna?hl=en-US">here</a></p>
  <h2>Step Six: Redirection 🔗</h2>
  <p>
    Now that you have the extension installed, you just have to go to the extension settings, paste the URL from Step 4 into the <code>Redirect URL</code> field, and click <code>Save</code>.
  </p>
  <h2>Step Seven: Gloat</h2>
  <p>Now you're ready to go! If you have any questions or problems, comment on the Tiktok about this website, or DM me on Discord at ツCheesyNeeshツ#5076</p>
</div>

<style>
  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .page {
    margin: 2rem 1rem;
    padding-bottom: 2rem;
  }
</style>
