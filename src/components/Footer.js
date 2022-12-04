import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faN } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">&copy; 2022 Company, Inc</span>
        </div>
        <ul
          className="nav col-md-4 justify-content-end list-unstyled d-flex ts-dark"
          style={{ fontSize: '1.2rem' }}
        >
          <li className="ms-3">
            <Link href="" style={{ color: '#198754' }}>
              <FontAwesomeIcon icon={faGoogle} />
            </Link>
          </li>
          <li className="ms-3">
            <Link href="https://url.kr/ka3rnf" style={{ color: '#198754' }}>
              <FontAwesomeIcon icon={faN} />
            </Link>
          </li>
          <li className="ms-3">
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
