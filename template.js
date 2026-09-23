(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navigation = [
    ['index.html', 'Home'],
    ['about.html', 'About Us'],
    ['gallery.htm', 'Gallery'],
    ['index.html#contact', 'Contact']
  ];

  function isActive(href) {
    return href.split('#')[0] === currentPage;
  }

  function renderNavigation() {
    const links = navigation.map(([href, label]) => {
      const active = isActive(href) ? ' active' : '';
      return `<li><a class="nav-link${active}" href="${href}">${label}</a></li>`;
    });

    return `
      ${links[0]}
      ${links[1]}
      <li class="dropdown">
        <a class="nav-link${currentPage === 'ministries.html' ? ' active' : ''}" href="ministries.html" aria-haspopup="true">
          Our Ministries <span class="caret"></span>
        </a>
        <div class="dropdown-menu">
          <a href="ministries.html#evangelism">Evangelism</a>
          <a href="ministries.html#prayer">Prayer Ministry</a>
          <a href="ministries.html#community">Community Outreach</a>
          <a href="ministries.html#youth">Youth Ministry</a>
          <a href="ministries.html#music">Music Ministry</a>
          <a href="ministries.html#online">Online Evangelism</a>
          <a href="ministries.html#pastoral">Pastoral Care</a>
          <a href="ministries.html#new-beginning">New Beginning</a>
        </div>
      </li>
      ${links[2]}
      ${links[3]}
    `;
  }

  function renderHeader() {
    return `
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="Miracle and Deliverance Ministry home">
          <span class="brand-logo" aria-hidden="true"></span>
        </a>
        <nav aria-label="Primary">
          <ul>${renderNavigation()}</ul>
        </nav>
        <div class="header-cta">
          <a href="#donate" class="btn btn-primary">Donate</a>
        </div>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-menu">
          <span></span><span></span><span></span>
          <span class="sr-only">Open navigation menu</span>
        </button>
      </div>
    `;
  }

  function renderFooter() {
    return `
      <div class="wrap">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>Miracle and Deliverance Ministry</h3>
            <p>A Christian ministry serving people through faith, prayer, compassion, and hope.</p>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="ministries.html">Our Ministries</a></li>
              <li><a href="testimonies.html">Testimonies</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Get involved</h4>
            <ul>
              <li><a href="prayer.html">Prayer request</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Partner with us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>Homa Bay County, Kenya</li>
              <li>peterotienoangir21@gmail.com</li>
              <li>+254 724 330 168</li>
              <li>+254 739 441 075</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Miracle and Deliverance Ministry. All rights reserved.</span>
          <span>Christian Ministry · Homa Bay County, Kenya</span>
        </div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (!header || !footer) {
      console.error('Shared template could not find the page header or footer.');
      return;
    }

    header.innerHTML = renderHeader();
    footer.innerHTML = renderFooter();

    const menuToggle = header.querySelector('.menu-toggle');
    const primaryMenu = header.querySelector('nav ul');
    primaryMenu.id = 'primary-menu';

    menuToggle.addEventListener('click', function () {
      const isOpen = header.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.querySelector('.sr-only').textContent = isOpen
        ? 'Close navigation menu'
        : 'Open navigation menu';
    });

    header.querySelectorAll('nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.querySelector('.sr-only').textContent = 'Open navigation menu';
      });
    });
  });
})();
