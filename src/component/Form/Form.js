import styled from "styled-components";

const StyledForm = styled.div`
  font-family: "Open Sans", sans-serif;
  align-items: center;
  width: 100vw;
  margin: 50px auto;
  height: 100%;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vw;
  }

  label {
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 3px;
  }

  input {
    background-color: #adb1b1;
    width: 75%;
    height: 25px;
  }

  .input-summary {
    background-color: #adb1b1;
    width: 75%;
    height: 180px;
  }

  button {
    margin-top: 30px;
    width: 250px;
    height: 50px;
    font-size: 25px;
  }
`;

const Form = () => {
  return (
    <>
      <StyledForm>
        <form className="form-container" autoComplete="off">
          <label className="label" htmlFor="artist">
            Artist
          </label>
          <input className="input" id="artist" type="text"></input>

          <label className="label" htmlFor="album">
            Album Name
          </label>
          <input className="input" id="album" type="text"></input>

          <label className="label" htmlFor="year">
            Release Year
          </label>
          <input className="input" id="year" type="number"></input>

          <label className="label" htmlFor="genre">
            Genre
          </label>
          <input className="input" id="genre" type="text"></input>

          <label className="label" htmlFor="image">
            Image
          </label>
          <input className="input" id="image" type="text"></input>

          <label className="label" htmlFor="summary">
            Summary
          </label>
          <input className="input-summary" id="summary" type="text"></input>
          <button>Modify Information</button>
        </form>
      </StyledForm>
    </>
  );
};

export default Form;
