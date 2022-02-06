<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let bookmarks = [
    {
      name: "New Bookmark",
      icon: "ri-bookmark-fill",
      url: "https://google.com",
    },
  ];

  function addBookmark() {
    bookmarks = [
      ...bookmarks,
      {
        name: "New Bookmark",
        icon: "ri-bookmark-fill",
        url: "https://google.com",
      },
    ];
  }
  function removeBookmark(i) {
    bookmarks = bookmarks.filter((_, index) => index !== i);
  }
</script>

<div>
  <button
    disabled={bookmarks.length > 7}
    class="addBookmark"
    on:click={addBookmark}>+ Add</button
  >
  <table class="current">
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Delete</th>
      </tr>
    </thead>
    {#each bookmarks as bookmark, i}
      <tr>
        <td class="name"><input maxlength="20" bind:value={bookmark.name} /></td
        >
        <td class="url"><input type="url" bind:value={bookmark.url} /></td>
        <td
          ><button class="delete" on:click={() => removeBookmark(i)}
            >Remove</button
          ></td
        >
      </tr>
    {/each}
  </table>
</div>

<style>
  i {
    font-size: 2rem;
  }
  th,
  td {
    border: 1px solid black;
    padding: 0.5rem;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  td input,
  td button {
    width: 100%;
  }
  thead {
    background-color: rgb(187, 187, 187);
  }
  .addBookmark {
    background-color: #3a6cc9;
    color: white;
    border: none;
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: ease-in-out 0.2s;
  }
  .addBookmark:hover {
    background-color: #2c5ca7;
  }
  .delete {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 0.5rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: ease-in-out 0.2s;
  }
  .delete:hover {
    background-color: #c0392b;
  }
</style>
