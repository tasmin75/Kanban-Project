import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteList,
  reorderLists,
  reorderCards,
  moveCardAcrossLists,
  editList,
  deleteCard,
  editCard,
} from "../redux/todoSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InputCard from "./InputCard";

import { MdDelete, MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function KanbanList() {
  const dispatch = useDispatch();
  const reduxData = useSelector((state: any) => state.todosData.lists);
  const [showInputList, setShowInputList] = React.useState<{ [key: string]: boolean }>({});
  const [showInputCard, setShowInputCard] = React.useState<{ [key: string]: boolean }>({});
  // const [cardTitle, setCardTitle] = React.useState("");

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination, draggableId, type } = result;

    if (type === "list") {
      dispatch(reorderLists({ startIndex: source.index, endIndex: destination.index }));
    } else if (type === "card") {
      const sourceListId = source.droppableId;
      const destListId = destination.droppableId;

      if (sourceListId === destListId) {
        dispatch(
          reorderCards({
            listId: sourceListId,
            startIndex: source.index,
            endIndex: destination.index,
          })
        );
      } else {
        dispatch(
          moveCardAcrossLists({
            sourceListId,
            destListId,
            sourceIndex: source.index,
            destIndex: destination.index,
            cardId: draggableId,
          })
        );
      }
    }
  };

  const handleEditList = (id: string) => {
    dispatch(editList(id));
    setShowInputList(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleCardEdit = (id: string) => {
    setShowInputCard(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  const editTask = (listId: string, id: string, title: string) => {
    dispatch(editCard({ listId, cardId: id, title }));
    setShowInputCard(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };
  

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-1 overflow-x-auto m-6">
        <Droppable droppableId="list-container" type="list">
          {(provided: any) => (
            <div
              className="flex flex-wrap gap-5"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {reduxData.map((list: any, index: number) => (
                <Draggable key={list.id} draggableId={list.id} index={index}>
                  {(provided: any) => (
                    <div
                      className="bg-white p-2 rounded-lg shadow-md w-72 text-black m-2"
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <div
                        className="flex justify-between items-center font-semibold"
                        {...provided.dragHandleProps}
                      >
                       {!showInputList[list.id] ? (
                          <h3
                            className="cursor-pointer overflow-x-auto"
                            onClick={() => handleEditList(list.id)}
                          >
                            {list.title}
                          </h3>
                        ) : (
                          <input
                            className="bg-slate-100 p-2 outline-none text-black rounded-lg"
                            type="text"
                            value={list.title}
                            onChange={(e) =>
                              dispatch(
                                editList({ id: list.id, title: e.target.value })
                              )
                            }
                          />
                        )}
                        {showInputList[list.id] ? (
                          <button
                            onClick={() => handleEditList(list.id)}
                            className="bg-blue-500 text-white p-1 rounded-lg"
                          >
                           👍
                          </button>
                        ): (
                        <MdDelete
                          className="text-red-500 cursor-pointer"
                          onClick={() => dispatch(deleteList(list.id))}
                        />
                        )}
                      </div>


                      <Droppable droppableId={list.id} type="card">
                        {(provided: any) => (
                          <div
                            className=""
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {list.task &&
                              list.task.map((task: any, index: number) => (
                                <Draggable
                                  key={task.id}
                                  draggableId={task.id}
                                  index={index}
                                >
                                  {(provided: any) => (
                                    <div
                                      className="bg-gray-100 p-2 text-black rounded-lg my-2 flex justify-between items-center"
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                    >
                                      {!showInputCard[task.id] ? (
                                      <div
                                        className="cursor-pointer overflow-hidden overflow-ellipsis "
                                        key={task.id}
                                      >
                                        {task.title}
                                      </div>
                                      ) : (
                                        <input
                                          className="bg-slate-100 p-1 outline-none text-black rounded-lg border-1 border-black"
                                          type="text"
                                          value={task.title}
                                          onChange={(e)=>
                                            dispatch(editCard({listId: list.id, cardId: task.id, title: e.target.value}))
                                          }
                                        />
                                      )}

                                      <div className="flex gap-2">
                                        <MdDelete
                                          onClick={() =>
                                            dispatch(
                                              deleteCard({
                                                listId: list.id,
                                                cardId: task.id,
                                              })
                                            )
                                          }
                                          className=""
                                        />
                                        {!showInputCard[task.id] ? (
                                        <MdEdit
                                        onClick={() =>
                                          handleCardEdit(task.id)
                                        }
                                          className="cursor-pointer text-black"
                                        />
                                        ):(
                                          <FaCheck 
                                          onClick={() =>
                                            editTask(list.id, task.id, task.title)
                                          }
                                          className="cursor-pointer text-green-500"
                                          />
                                        )}

                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                      <div className="">
                        <InputCard listId={list.id} type="card" />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <InputCard type={""} listId={""}        />
      </div>
    </DragDropContext>
  );
}

export default KanbanList;
