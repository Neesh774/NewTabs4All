<script lang="ts">
  import { indexString } from "./index_string";
  import { codeString } from "./siteCode.js";
  import Bookmarks from "./Bookmarks.svelte";
  import JSZip from "jszip";

  let username = "";
  let primaryColor = "#9ECE6A";
  let textLight = "#73DACA";
  let background = "#1A1B2C";
  let backgroundLight = "#202633";
  let bookmarks = [
    {
      name: "New Bookmark",
      icon: "ri-bookmark-fill",
      url: "https://google.com",
    },
  ];

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
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#1A1B2C" />
  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="title" content="New Tab Page Generator" />
  <meta name="description" content="Generate new tab pages with ease!" />
  <link rel="icon" type="image/png" href="./public/favicon.png" />
</svelte:head>

<div class="page">
  <h1>New Tab Generator</h1>
  <p>
    After creating a new tab page for myself, I decided to create this generator
    to give everyone something to brag to their friends about :)
  </p>
  <p>
    Follow the steps below, and pretty soon you'll be able to get an awesome new
    tab page!
  </p>
  <p>
    Built by <a href="https://twitter.com/Neesh774">@Neesh774 on Twitter</a>,
    <a href="https://www.tiktok.com/@cheesyneesh">@cheesyneesh on TikTok</a>
  </p>
  <div class="step">
    <h2>Step One: Page Content</h2>
    <div class="input">
      <span class="text-header">Your Name</span>
      <input
        required
        type="text"
        id="username"
        bind:value={username}
        placeholder="Rick Astley"
        maxlength="20"
      />
    </div>
  </div>
  <div class="step">
    <h2>Step Two: Colors 🎨</h2>
    <div class="input">
      <span class="text-header">Primary Color</span>
      <div
        class="color-picker-wrapper"
        style={`background-color: ${primaryColor}`}
      >
        <input type="color" id="backgroundImage" bind:value={primaryColor} />
      </div>
    </div>
    <div class="input">
      <span class="text-header">Secondary Text Color</span>
      <div
        class="color-picker-wrapper"
        style={`background-color: ${textLight}`}
      >
        <input type="color" id="backgroundImage" bind:value={textLight} />
      </div>
    </div>
    <div class="input">
      <span class="text-header">Background</span>
      <div
        class="color-picker-wrapper"
        style={`background-color: ${background}`}
      >
        <input type="color" id="backgroundImage" bind:value={background} />
      </div>
    </div>
    <div class="input">
      <span class="text-header">Bookmark Card Background</span>
      <div
        class="color-picker-wrapper"
        style={`background-color: ${backgroundLight}`}
      >
        <input type="color" id="backgroundImage" bind:value={backgroundLight} />
      </div>
    </div>
  </div>
  <div class="step">
    <h2>Step Three: Bookmarks 🔖</h2>
    <Bookmarks bind:bookmarks />
  </div>
  <div class="step">
    <h2>Step Four: Download Your File 📂</h2>
    <button
      class="download"
      on:click={createFile}
      data-splitbee-event="Create New Tab"
      disabled={username.length < 1}>Download ZIP</button
    >
    <p>
      After extracting your files, navigate to <code>index.html</code> in the new
      folder. Open it, make sure that the page looks correct, and then copy the URL
      in the address bar at the top.
    </p>
  </div>
  <div class="step">
    <h2>Step Five: Download the Extension</h2>
    <p>
      You'll have to download a Chrome Extension to actually redirect to this
      page when you make a new tab. Download it <a
        href="https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna?hl=en-US"
        >here</a
      >
    </p>
  </div>
  <div class="step">
    <h2>Step Six: Redirection 🔗</h2>
    <p>
      Now that you have the extension installed, you just have to go to the
      extension settings, paste the URL from Step 4 into the <code
        >Redirect URL</code
      >
      field, and click <code>Save</code>.
    </p>
  </div>
  <div class="step">
    <h2>Step Seven: Gloat</h2>
    <p>
      Now you're ready to go! If you have any questions or problems, comment on
      the Tiktok about this website, or DM me on Discord at ツCheesyNeeshツ#5076
    </p>
  </div>
  <div class="step">
    <h3>Note**</h3>
    <p>
      This only works when the file in your computer is at the same place as the
      URL you put into the extension. If you ever move the file, you will also
      have to change the URL in the extension.
    </p>
  </div>
</div>
<div class="demo" style={`background-color: ${background}`}>
  <span style={`color: ${textLight}`}>Hey there, </span>
  <span style={`color: ${primaryColor}`}>{username}</span>
</div>

<style>
  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .page {
    margin: 2rem 5rem;
    padding-bottom: 2rem;
    max-width: 50%;
  }
  input[type="color"] {
    opacity: 0;
    display: block;
    width: 60px;
    height: 32px;
    border: none;
    cursor: pointer;
  }
  .color-picker-wrapper {
    float: left;
    width: 60px;
    height: 32px;
  }
  .text-header {
    margin-bottom: 0.5rem;
  }
  h2 {
    margin-top: 2rem;
  }
  #username {
    width: 60%;
  }
  p,
  span,
  div,
  input {
    font-size: 1.1rem;
  }
  .download {
    background-color: #11ac2b;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: ease-in-out 0.2s;
  }
  .download:hover {
    background-color: #0f9d1e;
  }
  .download:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  h3 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: gray;
  }
  .demo {
    position: fixed;
    top: 0;
    right: 0;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    font-size: 4rem;
    font-weight: bold;
    padding: 3rem 6rem;
    border-radius: 30px;
    max-width: 25%;
  }
  .demo span {
    font-size: 3rem;
  }
  @media (max-width: 1000px) {
    .page {
      margin: 2rem 1rem;
    }
    .demo {
      display: none;
    }
  }
</style>
