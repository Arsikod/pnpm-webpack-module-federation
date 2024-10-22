export class NavBar {
  render(
    navItems: {
      url: string;
      title: string;
    }[]
  ) {
    const liItems = navItems.map((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.url;
      a.textContent = item.title;
      li.appendChild(a);
      return li;
    });

    const ul = document.createElement("ul");

    liItems.forEach((li) => {
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  }
}
