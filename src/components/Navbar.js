import { Component } from "react";
import search from "../public/icon/search.svg";
import logo from "../public/img/mujigae-logo.svg";
import "./NavbarStyled.css";

class Navbar extends Component {
  state = { clicked: false, searchbarClicked: false };
  // 클릭시 변환되는 햄버거버튼
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  handleSearchbarClick = () => {
    this.setState({ searchbarClicked: !this.state.searchbarClicked });
  };

  render() {
    return (
      <>
        <nav>
          {/* 로고 */}
          <div class="logo">
            <img
              src={logo}
              alt="mujigae"
              class="logoImg"
            ></img>
          </div>
          {/* 로고 끝 */}

          {/* search bar */}
          <div class="middleContainer">
            <div class="searchbar">
              {/* <i class="fa fa-search" aria-hidden="true"></i> */}{" "}
              {/*아이콘*/}
              <img
                src={search}
                alt="search"
                className={this.state.searchbarClicked ? "hidden" : ""}
              />
              <input
                className="inputSearch"
                placeholder="Search plattes"
                // onKeyUp={showTags}
                //돋보기 아이콘 사라지게
                onFocus={this.handleSearchbarClick}
                onBlur={this.handleSearchbarClick}
              />
              <div class="modal-body">
                <div class="badges">
                  <span>tag1</span>
                  <span>tag2</span>
                  <span>tag3</span>
                  <span>tag4</span>
                  <span>tag5</span>
                </div>
              </div>
            </div>
          </div>

          {/* 헤더 create collection hamburgericon*/}
          <div>
            <ul id="littleMenu" className={this.state.clicked ? "active" : ""}>
              <li>
                <a class="active" href="index.html">
                  create
                </a>
              </li>
              <li>
                <a href="index.html">collection</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
