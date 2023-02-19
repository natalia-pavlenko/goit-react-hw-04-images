import * as GetImages from '../../service/axios-api';

import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { Toaster } from 'react-hot-toast';

import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { AppDiv, AppImg } from './App.styled';

export class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    modalUrl: null,
    showModal: false,
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      GetImages.getImages(searchQuery, page).then(data => {
        return this.setState(prevState => ({
          gallery: [...prevState.gallery, ...data.hits],

          showBtn: page < Math.ceil(data.totalHits / 12),
        }));
      });
    }
  }
  getSearchQuery = name => {
    this.setState({
      searchQuery: name,
      gallery: [],
      modalUrl: null,
      showModal: false,
      page: 1,
    });
  };

  handleClickLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggelModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { gallery, showModal, modalUrl } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.getSearchQuery} />
        {gallery && <ImageGallery gallery={gallery} />}
        {showModal && (
          <Modal onClose={this.toggelModal}>
            <AppDiv>
              <AppImg src={modalUrl} alt="" />
            </AppDiv>
          </Modal>
        )}

        {this.state.showBtn && <Button onClick={this.handleClickLoadMoreBtn} />}
      </>
    );
  }
}
