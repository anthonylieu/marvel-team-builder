document.addEventListener(".character-container", function () {
  const searchInput = this.value;
  console.log(searchInput);
  this.router.navigate([`/${searchInput}`]);
});
