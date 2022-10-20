import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <span class="text-muted">&copy; 2022 Company, Inc</span>
        </div>
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <Link href="#">인스타</Link>
          </li>
          <li class="ms-3">
            <Link href="#">블로그</Link>
          </li>
          <li class="ms-3">
            <Link href="#">깃헙</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}