"use client";

import React, { useState } from "react";
// import style from './InputCard.module.css'
import { useDispatch } from "react-redux";
import { addList, addCard } from "../redux/todoSlice";

import { RxCross1 } from "react-icons/rx";

type InputCardProps = {
  type: string;
  listId: string;
};

const InputCard = ({ type, listId }: InputCardProps) => {
  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [error, setError] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (title !== "") {
      const id2 = Math.random().toString(36).substr(2, 9);
      if (type) {
        dispatch(addCard({ title: title, listId: listId }));
      } else if (title) {
        dispatch(addList({ id2, title: title }));
      }
      setTitle("");
      setError(true);
    } else {
      setError(false);
    }
  };
  const openForm = () => {
    setIsFormVisible(true);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="rounded-lg flex items-start p-2 mt-2">
      
      {isFormVisible ? (
        <form onSubmit={handleSubmit}>
          <div className={error ? "" : "errorForm"}>
            {type === "card" ? (
              <input
                className="w-full bg-white p-2 outline-none border-1 border-gray-500 text-black rounded-lg"
                type="text"
                placeholder="Enter a title for this card..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <input
                className="w-full bg-white p-2 outline-none border-1 border-gray-500 text-black rounded-lg"
                type="text"
                placeholder="Enter list title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            )}
            <div className="flex gap-2 my-2 justify-between">
            <button type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              {type === "card" ? "Add Card" : "Add List"}
            </button>
            <RxCross1
              onClick={() => setIsFormVisible(false)}
              className="text-red-500 text-3xl cursor-pointer"
            />
            </div>
          </div>
        </form>
      )
      : (
        <div
      
        onClick={handleToggle}
        className="cursor-pointer flex gap-2 p-2 text-white rounded-lg  bg-blue-500 hover:text-black"  
      >
        <button onClick={openForm} className="">
          + Add {type ? "a card" : "another list"}
        </button>
       
      </div>
      )}
    </div>
  );
};

export default InputCard;
