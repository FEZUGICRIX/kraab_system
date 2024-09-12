import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, onClose }) => {
  const [state, setState] = useState({
    step: 1,
    selectedTypes: [],
    selectedRepairs: [],
    installation: '',
    repairStageDescription: '',
    hasProject: false,
    files: [],
    dimensions: '',
    contact: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleTypeChange = (event) => {
    const { value, checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      selectedTypes: checked
        ? [...prevState.selectedTypes, value]
        : prevState.selectedTypes.filter((type) => type !== value),
    }));
  };

  const handleRepairChange = (event) => {
    const { value, checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      selectedRepairs: checked
        ? [...prevState.selectedRepairs, value]
        : prevState.selectedRepairs.filter((type) => type !== value),
    }));
  };

  const handleInstallationChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      installation: event.target.value,
    }));
  };

  const handleRepairStageDescriptionChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      repairStageDescription: event.target.value,
    }));
  };

  const handleHasProjectChange = (event) => {
    const hasProject = event.target.value === 'Kyllä';
    setState((prevState) => ({
      ...prevState,
      hasProject,
      files: !hasProject ? [] : prevState.files,
    }));
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFileNames(files.map((file) => file.name));
    setState((prevState) => ({
      ...prevState,
      files,
    }));
  };

  const handleDimensionsChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      dimensions: event.target.value,
    }));
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      contact: {
        ...prevState.contact,
        [name]: value,
      },
    }));
  };

  const nextStep = () =>
    setState((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));

  const prevStep = () =>
    setState((prevState) => ({
      ...prevState,
      step: prevState.step - 1,
    }));

  const isNextStepDisabled = () => {
    if (state.step === 1) {
      return !(state.installation && state.selectedTypes.length > 0);
    }
    if (state.step === 2) {
      return (
        !state.repairStageDescription ||
        !state.dimensions ||
        (state.hasProject && state.files.length === 0)
      );
    }
    return false;
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', state.contact.firstName);
    formData.append('lastName', state.contact.lastName);
    formData.append('email', state.contact.email);
    formData.append('phone', state.contact.phone);
    formData.append('dimensions', state.dimensions);
    formData.append('installation', state.installation);
    formData.append(
      'repairStageDescription',
      state.repairStageDescription
    );
    formData.append('hasProject', state.hasProject ? 'yes' : 'no');

    // Добавляем selectedTypes в FormData
    state.selectedTypes.forEach((type, index) => {
      formData.append(`selectedTypes[]`, type);
    });

    // Добавляем selectedRepairs в FormData
    state.selectedRepairs.forEach((type, index) => {
      formData.append(`selectedRepairs[]`, type);
    });

    state.files.forEach((file) => {
      formData.append('files[]', file);
    });

    try {
      await axios.post('/api/clientDataEmail', formData);

      setFileNames([]);
      setState({
        step: 1,
        selectedTypes: [],
        installation: '',
        repairStageDescription: '',
        hasProject: false,
        files: [],
        dimensions: '',
        contact: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        },
      });
      onClose();
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modalClose} onClick={onClose}>
          &times;
        </button>

        {state.step === 1 && (
          <div>
            <h2 className={styles.modalHeader}>
              Valitse kiinnostuksen kohteena oleva profiiliratkaisu:
            </h2>

            <div className={styles.checkboxGroups}>
              <div className={styles.checkboxGroup}>
                <h3 style={{ fontSize: 20, marginBottom: 15 }}>Huone:</h3>
                {[
                  'Toimisto',
                  'Lääkärin',
                  'Ravintola',
                  'Käytävä',
                  'Olohuone',
                  'Makuuhuone',
                  'Lastenhuone',
                  'Kylpyhuone',
                  'Parturikampaamo',
                  'hotelli',
                  'En tiedä',
                  'Oma vaihtoehto',
                ].map((type) => (
                  <label key={type} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      value={type}
                      onChange={handleTypeChange}
                      checked={state.selectedTypes.includes(type)}
                      className={styles.checkbox}
                    />
                    {type}
                  </label>
                ))}
              </div>

              <div className={styles.checkboxGroup}>
                <h3 style={{ fontSize: 20, marginBottom: 15 }}>
                  Korjaus:
                </h3>

                {[
                  '3d-konsepti olohuoneeseen',
                  'Monimutkainen',
                  'Enimmäismäärät',
                  'Ratajärjestelmä',
                  'Kevyet viivat',
                  'Vaaleat ikkunat',
                  'Reunalistat ja markkinaraon',
                  'Ilmanvaihto',
                  'Shadow baseboards',
                  'Oma versio',
                  'En tiedä',
                  'Oma vaihtoehto',
                ].map((type) => (
                  <label key={type} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      value={type}
                      onChange={handleRepairChange}
                      checked={state.selectedRepairs.includes(type)}
                      className={styles.checkbox}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <h2 className={styles.modalHeader}>
              Haluatko tilata asennuksen?
            </h2>

            <div className={styles.radioGroup}>
              {['Kyllä', 'Ei'].map((option) => (
                <label key={option} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="installation"
                    value={option}
                    onChange={handleInstallationChange}
                    checked={state.installation === option}
                    className={styles.radio}
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className={styles.modalButtons}>
              <button
                className={(styles.modalButton, styles.modalButtonFirst)}
                onClick={nextStep}
                disabled={
                  !state.installation || state.selectedTypes.length === 0
                }
              >
                Edelleen
              </button>
            </div>
          </div>
        )}

        {state.step === 2 && (
          <div>
            <h2 className={styles.modalHeader}>
              Kuvaile, missä vaiheessa remonttisi on
            </h2>
            <textarea
              value={state.repairStageDescription}
              onChange={handleRepairStageDescriptionChange}
              className={styles.inputField}
              placeholder="Kirjoita korjausvaiheen kuvaus"
            ></textarea>

            <h2 className={styles.modalHeader}>
              Onko sinulla projektia tai valokuvaa kohteesta?
            </h2>
            <div className={styles.radioGroup}>
              {['Kyllä', 'Ei'].map((option) => (
                <label key={option} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="hasProject"
                    value={option}
                    onChange={handleHasProjectChange}
                    checked={state.hasProject === (option === 'Kyllä')}
                    className={styles.radio}
                  />
                  {option}
                </label>
              ))}
            </div>

            {state.hasProject && (
              <div className={styles.fileUpload}>
                <label
                  htmlFor="file-input"
                  className={styles.customFileButton}
                >
                  Valitse tiedosto
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept=".pdf, .jpg, .jpeg, .png"
                  onChange={handleFileChange}
                  multiple
                  className={styles.fileInput}
                />
                {fileNames.length > 0 && (
                  <ul className={styles.fileList}>
                    {fileNames.map((fileName) => (
                      <li key={fileName} className={styles.fileItem}>
                        {fileName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <h2 className={styles.modalHeader}>
              Anna likimääräiset mitat
            </h2>
            <textarea
              value={state.dimensions}
              onChange={handleDimensionsChange}
              className={styles.inputField}
              placeholder="Syötä mitat"
            ></textarea>

            <div className={styles.modalButtons}>
              <button className={styles.modalButton} onClick={prevStep}>
                Takaisin
              </button>
              <button
                className={styles.modalButton}
                onClick={nextStep}
                disabled={isNextStepDisabled()}
              >
                Edelleen
              </button>
            </div>
          </div>
        )}

        {state.step === 3 && (
          <div>
            <h2 className={styles.modalHeader}>Jätä yhteystiedot</h2>

            <form
              className={styles.form}
              onSubmit={handleSubmitForm}
              enctype="multipart/form-data"
              method="POST"
            >
              <input
                type="text"
                name="firstName"
                placeholder="Nimi"
                value={state.contact.firstName}
                onChange={handleContactChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Sukunimi"
                value={state.contact.lastName}
                onChange={handleContactChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Sähköposti"
                value={state.contact.email}
                onChange={handleContactChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Puhelin"
                value={state.contact.phone}
                onChange={handleContactChange}
                required
              />
              <div className={styles.modalButtons}>
                <button className={styles.modalButton} onClick={prevStep}>
                  Takaisin
                </button>
                <input
                  className={styles.modalButton}
                  type="submit"
                  value="Lähettää"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
