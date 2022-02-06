<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let bookmarks = [{
        name: "New Bookmark",
        icon: "ri-bookmark-fill",
        url: "https://google.com",
      }];

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
  <button on:click={addBookmark}>Add</button>
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
        <td class="name"><input bind:value={bookmark.name} /></td>
        <td class="url"><input type="url" bind:value={bookmark.url} /></td>
        <td><button on:click={() => removeBookmark(i)}>Remove</button></td>
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
    width: 50%;
  }
  td input, td button{
    width: 100%;
  }
</style>
