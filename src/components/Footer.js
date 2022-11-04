import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faN } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <span class="text-muted">&copy; 2022 Company, Inc</span>
        </div>
        <ul
          class="nav col-md-4 justify-content-end list-unstyled d-flex ts-dark"
          style={{ fontSize: '1.2rem' }}
        >
          <li class="ms-3">
            <Link href="" style={{ color: '#198754' }}>
              <FontAwesomeIcon icon={faGoogle} />
            </Link>
          </li>
          <li class="ms-3">
            <Link href="https://url.kr/ka3rnf" style={{ color: '#198754' }}>
              <FontAwesomeIcon icon={faN} />
            </Link>
          </li>
          <li class="ms-3">
            <Link
              href="https://github.com/TripLog-project/TripLog"
              style={{ color: '#198754' }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
