import { createContext, useState, useEffect } from 'react';
import { getImages } from 'api/search.images';

export const Context = createContext();

export function GlobalContext({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchImages = async () => {
      const data = await getImages({ searchQuery, page, perPage });
      if (!data.hits.length) {
        throw alert('No images found');
      }
      setImages(data.hits);
      setTotalImages(data.hits.length);
      setPage(page + 1);
    };
    fetchImages();
  }, [searchQuery, page, perPage]);

  //   const fetchImages = async () => {
  //     const data = await getImages({ searchQuery, page, perPage });
  //     if (!data.hits.length) {
  //       throw alert('No images found');
  //     }
  //     setImages(data.hits);
  //     setTotalImages(data.hits.length);
  //     setPage(page + 1);
  //   };

  const loadMoreImgs = async () => {
    setIsLoading(true);
    const data = await getImages({ searchQuery, page, perPage });
    setImages([...images, ...data.hits]);
    setTotalImages(data.hits.length);
    setPage(page + 1);
    setIsLoading(false);
  };

  return (
    <Context.Provider
      value={{
        searchQuery,
        setSearchQuery,
        search,
        setSearch,
        images,
        setImages,
        page,
        setPage,
        perPage,
        setPerPage,
        isLoading,
        setIsLoading,
        totalImages,
        setTotalImages,
        showModal,
        setShowModal,
        largeImage,
        setLargeImage,
        loadMoreImgs,
      }}
    >
      {children}
    </Context.Provider>
  );
}
