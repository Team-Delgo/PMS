import React,{useState} from "react";
import axios from 'axios';

const categoryCode = {
  산책: 'CA0001',
  카페: 'CA0002',
  식당: 'CA0003',
  목욕: 'CA0004',
  미용: 'CA0005',
  병원: 'CA0006',
  기타: 'CA9999',
};

function MungPlaceRegistration() {
  const [category, setCategory] = useState("산책");
  const [placeName, setPlaceName] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState();

  const onUploadImage = (e) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
    console.log(e.target.files[0].name);
  };

  const changeCategory = (e)=>{
    setCategory(e.target.value)
  }

  const registerMungPlace = async () => {
    if (placeName === "") {
      window.alert("멍플 명 입력해요");
      return;
    }

    if (address === "") {
      window.alert("지번주소 입력해요");
      return;
    }

    if (file === undefined) {
      window.alert("멍플 이미지 업로드 해요");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("photo", file);

      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          categoryCode: categoryCode[category],
          placeName,
          address,
          photo: formData,
        }
      );
      console.log(result);
      window.alert("멍플장소 등록 완료함");
    } catch (error) {
      console.log(error);

      window.alert(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="멍플장소 명"
        onChange={(e) => {
          setPlaceName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="지번 주소"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <input type="file" placeholder="이미지" onChange={onUploadImage} />
      <select value={category} onChange={changeCategory}>
        <option value="산책">산책</option>
        <option value="카페">카페</option>
        <option value="식당">식당</option>
        <option value="목욕">목욕</option>
        <option value="미용">미용</option>
        <option value="병원">병원</option>
        <option value="기타">기타</option>
      </select>
      <button type="button" onClick={registerMungPlace}>
        등록
      </button>
    </div>
  );
}

export default MungPlaceRegistration;
