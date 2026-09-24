const books = [
  {
    id: 3,
    title: 'العقلية تهم',
    author: 'روبن شارما',
    price: 299,
    category: 'إدارة',
    image: 'images/4cc63f92c5e11e6750073d169e4a4223.jpg',
    description: 'خطوات عملية لبناء عقلية أكثر تركيزًا وتحويل العادات اليومية إلى نتائج ملموسة.',
  },
  {
    id: 4,
    title: 'الربح من التسويق',
    author: 'جاي شيتي',
    price: 499,
    category: 'إدارة',
    image: 'images/76c383554fcce0b43d506a7744b0926f.jpg',
    description: 'دليل معاصر لفهم التسويق وبناء قيمة حقيقية تصل إلى جمهورك.',
  },
  {
    id: 5,
    title: 'عادات ذرية',
    author: 'جيمس كلير',
    price: 549,
    category: 'أدب',
    image: 'images/85f81d008146d8a0f73568fee61ac734.jpg',
    description: 'كيف تصنع تغييرات صغيرة مستمرة تقودك إلى نتائج كبيرة ومستدامة.',
  },
  {
    id: 6,
    title: 'الكتابة الإبداعية',
    author: 'ووردبريس برس',
    price: 299,
    category: 'أدب',
    image: 'images/c142719d8ee2f05b9f02194e7510e61f.jpg',
    description: 'دليل ملهم لكل من يريد أن يكتب بقلب واضح وصوت مميز.',
  },
  {
    id: 7,
    title: 'كتاب جديد',
    author: 'BookNest',
    price: 349,
    category: 'أدب',
    image: 'images/book.png',
    description: 'كتاب جديد أضيف إلى مكتبة BookNest، ويمكن استكشافه وإضافته إلى السلة أو المفضلة.',
  },
  {
    id: 8,
    title: 'آفاق المعرفة',
    author: 'BookNest',
    price: 399,
    category: 'معرفة',
    image: 'images/4b78ad88b032a6ed153c24a6d8330f07.jpg',
    description: 'كتاب جديد من مجموعة الصور المتاحة في مكتبة BookNest.',
  },
  {
    id: 9,
    title: 'رحلة القراءة',
    author: 'BookNest',
    price: 429,
    category: 'أدب',
    image: 'images/Unsplash.png',
    description: 'كتاب جديد من مجموعة الصور المتاحة في مكتبة BookNest.',
  },
  {
    id: 10,
    title: 'قصة الكتاب',
    author: 'BookNest',
    price: 449,
    category: 'معرفة',
    image: 'images/banner1.png',
    description: 'كتاب جديد من مجموعة الصور المتاحة في مكتبة BookNest.',
  },
  {
    id: 11,
    title: 'التفكير الإبداعي',
    author: 'BookNest',
    price: 379,
    category: 'إبداع',
    image: 'images/cat1.png',
    description: 'كتاب جديد من مجموعة الصور المتاحة في مكتبة BookNest.',
  },
  {
    id: 12,
    title: 'اكتشف وتعلم',
    author: 'BookNest',
    price: 389,
    category: 'تعلم',
    image: 'images/cat2.png',
    description: 'كتاب جديد من مجموعة الصور المتاحة في مكتبة BookNest.',
  },
  {
    id: 13,
    title: 'عالم الكتب',
    author: 'BookNest',
    price: 419,
    category: 'معرفة',
    image: 'images/cat3.png',
    description: 'كتاب جديد من مجموعة الصور المتاحة في مكتبة BookNest.',
  },
  {
    id: 14,
    title: 'مهارات النجاح',
    author: 'BookNest',
    price: 459,
    category: 'تطوير',
    image: 'images/cc137b2224398ef2f9aa94f3749bc285.jpg',
    description: 'كتاب جديد من مجموعة الصور المتاحة في مكتبة BookNest.',
  },
  {
    id: 15,
    title: 'المكتبة الحديثة',
    author: 'BookNest',
    price: 499,
    category: 'معرفة',
    image: 'images/hero-reference.jpg',
    description: 'كتاب جديد من مجموعة الصور المتاحة في مكتبة BookNest.',
  },
  {
    id: 16,
    title: 'ملاحظات القارئ',
    author: 'BookNest',
    price: 299,
    category: 'أدب',
    image: 'images/proposed-reader-notes.png',
    description: 'دفتر أنيق لتسجيل الملاحظات والأفكار التي يكتشفها القارئ أثناء القراءة.',
  },
  {
    id: 17,
    title: 'هوية BookNest',
    author: 'BookNest',
    price: 319,
    category: 'معرفة',
    image: 'images/proposed-booknest-identity-1.png',
    description: 'تصميم بصري مستوحى من الكتب المفتوحة وهوية BookNest البنفسجية والبرتقالية.',
  },
  {
    id: 18,
    title: 'هوية BookNest - المكتبة',
    author: 'BookNest',
    price: 359,
    category: 'معرفة',
    image: 'images/proposed-booknest-identity-2.png',
    description: 'تصميم بصري لمكتبة حديثة داخل كتاب مفتوح، مستوحى من هوية BookNest.',
  },
  {
    id: 1,
    title: 'إتقان الكود',
    author: 'بايت بوكس',
    price: 399,
    category: 'تكنولوجيا',
    image: 'images/BOOK1.png',
    description: 'مرجع عملي للمطورين الباحثين عن أساليب برمجية أوضح وأفضل، مع أمثلة من واقع الحياة.',
  },
  {
    id: 2,
    title: 'طريق العلم',
    author: 'جون كارتر',
    price: 499,
    category: 'تكنولوجيا',
    image: 'images/BOOK2.png',
    description: 'رحلة مبسطة وممتعة لاكتشاف العلوم والأفكار التي تصنع عالمنا.',
  },
];

const get = (key) => JSON.parse(localStorage.getItem(key) || '[]');
const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const money = (value) => `${Number(value).toLocaleString('ar-YE')} RY`;

const toast = (message) => {
  const element = document.getElementById('toast');
  element.textContent = message;
  element.classList.add('show');
  setTimeout(() => element.classList.remove('show'), 2200);
};

const findBook = (id) => books.find((book) => book.id === Number(id));

function updateCounts() {
  const cartCount = document.getElementById('cartCount');
  const wishlistCount = document.getElementById('wishlistCount');

  if (cartCount) {
    const count = get('cart').reduce((total, item) => total + item.qty, 0);
    cartCount.textContent = count ? count : '';
  }

  if (wishlistCount) {
    const count = get('wishlist').length;
    wishlistCount.textContent = count ? count : '';
  }
}

function addCart(id) {
  const cart = get('cart');
  const item = cart.find((cartItem) => cartItem.id === id);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }

  set('cart', cart);
  updateCounts();
  toast('تمت إضافة الكتاب إلى السلة');
}

function toggleWish(id) {
  let wishlist = get('wishlist');

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((bookId) => bookId !== id);
    toast('تمت الإزالة من المفضلة');
  } else {
    wishlist.push(id);
    toast('تمت الإضافة إلى المفضلة');
  }

  set('wishlist', wishlist);
  updateCounts();
  renderBooks();
  renderWishlist();
}

function bookCard(book) {
  const wished = get('wishlist').includes(book.id);
  const heartIcon = wished ? 'bi-heart-fill' : 'bi-heart';
  const activeClass = wished ? 'active' : '';

  return `
    <div class="col-sm-6 col-lg-4">
      <article class="book-card">
        <img src="${book.image}" alt="${book.title}">
        <div class="card-body">
          <h3>${book.title}</h3>
          <div class="author">${book.author} · ${book.category}</div>
          <div class="price">${money(book.price)}</div>
          <div class="card-actions">
            <button class="btn btn-primary flex-grow-1 add-cart" data-id="${book.id}">
              إضافة للسلة
            </button>
            <button class="icon-btn ${activeClass}" title="المفضلة" data-wish="${book.id}">
              <i class="bi ${heartIcon}"></i>
            </button>
            <button class="icon-btn" title="التفاصيل" data-detail="${book.id}">
              <i class="bi bi-arrow-left"></i>
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderBooks(list = books) {
  const grid = document.getElementById('bookGrid');
  if (!grid) return;

  grid.innerHTML = list.length
    ? list.map(bookCard).join('')
    : '<div class="col-12"><div class="alert alert-light">لم نجد كتبًا مطابقة لبحثك.</div></div>';
}

function renderWishlist() {
  const target = document.getElementById('wishlistItems');
  if (!target) return;

  const wishlistBooks = get('wishlist').map(findBook).filter(Boolean);
  target.innerHTML = wishlistBooks.length
    ? wishlistBooks.map(bookCard).join('')
    : '<div class="col-12"><div class="alert alert-light">قائمة المفضلة فارغة. أضف الكتب التي أعجبتك من قسم الكتب.</div></div>';
}

function renderCart() {
  const cart = get('cart');
  const target = document.getElementById('cartItems');
  if (!target) return;

  target.innerHTML = cart.length
    ? cart
        .map(({ id, qty }) => {
          const book = findBook(id);

          return `
            <div class="cart-row">
              <img src="${book.image}" alt="${book.title}">
              <div class="grow">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <strong class="text-orange">${money(book.price)}</strong>
              </div>
              <input
                class="form-control cart-qty"
                type="number"
                min="1"
                value="${qty}"
                data-id="${book.id}"
                style="width: 76px"
              >
              <button class="btn btn-sm btn-outline-danger remove-cart" data-id="${book.id}">
                حذف
              </button>
            </div>
          `;
        })
        .join('')
    : '<div class="alert alert-light">السلة فارغة. <a href="#books" class="text-orange">تصفح الكتب الآن</a></div>';

  const subtotal = cart.reduce(
    (total, item) => total + findBook(item.id).price * item.qty,
    0,
  );
  const shipping = subtotal ? 50 : 0;

  document.getElementById('subtotal').textContent = money(subtotal);
  document.getElementById('shipping').textContent = money(shipping);
  document.getElementById('total').textContent = money(subtotal + shipping);
  document.getElementById('cartSummary').textContent = `${cart.reduce(
    (total, item) => total + item.qty,
    0,
  )} منتجات`;
}

function showDetail(id) {
  const book = findBook(id);

  if (!document.getElementById('detailContent')) {
    location.href = `book-detail.html?id=${id}`;
    return;
  }

  document.getElementById('detailContent').innerHTML = `
    <div class="row g-5 align-items-center">
      <div class="col-lg-5">
        <img class="detail-img" src="${book.image}" alt="${book.title}">
      </div>
      <div class="col-lg-7 detail-content">
        <span class="eyebrow">تفاصيل الكتاب</span>
        <h2>${book.title}</h2>
        <p class="muted">بواسطة ${book.author}</p>
        <div class="text-warning mb-3">
          ★★★★★ <small class="muted">(245 مراجعة)</small>
        </div>
        <div class="price mb-3">${money(book.price)}</div>
        <p class="lead text-muted">${book.description}</p>
        <div class="d-flex gap-2 mt-4">
          <button class="btn btn-primary add-cart" data-id="${book.id}">
            إضافة إلى السلة
          </button>
          <button class="btn btn-outline-dark" data-wish="${book.id}">
            إضافة للمفضلة
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('book-detail').classList.remove('d-none');
  document.getElementById('books')?.classList.add('d-none');
  location.hash = 'book-detail';
}

function filterBooks() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  let filteredBooks = books.filter((book) =>
    `${book.title}${book.author}${book.category}`.toLowerCase().includes(query),
  );
  const sort = document.getElementById('sortSelect').value;

  if (sort === 'low') {
    filteredBooks.sort((first, second) => first.price - second.price);
  }

  if (sort === 'high') {
    filteredBooks.sort((first, second) => second.price - first.price);
  }

  renderBooks(filteredBooks);
}

document.addEventListener('click', (event) => {
  const cartButton = event.target.closest('.add-cart');
  if (cartButton) addCart(Number(cartButton.dataset.id));

  const wishlistButton = event.target.closest('[data-wish]');
  if (wishlistButton) toggleWish(Number(wishlistButton.dataset.wish));

  const detailButton = event.target.closest('[data-detail]');
  if (detailButton) showDetail(Number(detailButton.dataset.detail));

  const removeButton = event.target.closest('.remove-cart');
  if (removeButton) {
    set(
      'cart',
      get('cart').filter((item) => item.id !== Number(removeButton.dataset.id)),
    );
    renderCart();
    updateCounts();
  }

  if (event.target.id === 'backToBooks') {
    document.getElementById('book-detail')?.classList.add('d-none');
    document.getElementById('books')?.classList.remove('d-none');
    location.hash = 'books';
  }

  if (event.target.id === 'checkoutBtn') {
    toast('تم تجهيز طلبك بنجاح');
  }

  const category = event.target.closest('[data-filter]');
  if (category) {
    document.getElementById('searchInput').value = category.dataset.filter;
    filterBooks();
  }
});

document.addEventListener('change', (event) => {
  if (!event.target.matches('.cart-qty')) return;

  const cart = get('cart');
  const item = cart.find((cartItem) => cartItem.id === Number(event.target.dataset.id));
  item.qty = Math.max(1, Number(event.target.value));
  set('cart', cart);
  renderCart();
  updateCounts();
});

document.getElementById('searchInput')?.addEventListener('input', filterBooks);
document.getElementById('sortSelect')?.addEventListener('change', filterBooks);

document.getElementById('loginForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  toast('تم تسجيل الدخول تجريبيًا');
});

document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  toast('تم إرسال رسالتك بنجاح');
  event.target.reset();
});

if (document.getElementById('detailContent')) {
  const id = new URLSearchParams(location.search).get('id');
  if (id) showDetail(Number(id));
}

renderBooks();
renderWishlist();
renderCart();
updateCounts();

const navSections = [...document.querySelectorAll('main section[id]')];
const currentPage = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.section-nav a.nav-link').forEach((link) => {
  const href = link.getAttribute('href');

  if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
    link.classList.add('active');
  }
});

const navLinks = [...document.querySelectorAll('.main-menu .nav-link')];
const anchorSections = navSections.filter((section) =>
  document.querySelector(`.section-nav a[href="#${section.id}"]`),
);

if (anchorSections.length) {
  const navObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          if (link.getAttribute('href')?.startsWith('#')) {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`,
            );
          }
        });
      }),
    { rootMargin: '-28% 0px -62% 0px', threshold: 0 },
  );

  anchorSections.forEach((section) => navObserver.observe(section));
}
