import { taskStatuses } from '@/config';

export const auth = {
  id: "1"
}

export const users = [
  {
    id: "1",
    name: "Petr"
  },
  {
    id: "2",
    name: "Ivan"
  },
  {
    id: "3",
    name: "Maria"
  }
]

export const tasks = [
  {
    id: "11",
    ownerId: "1",
    performerId: "2",
    createdAt: 1571252400000,
    status: taskStatuses.work,
    name: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
  },
  {
    id: "12",
    ownerId: "1",
    performerId: "3",
    createdAt: 1571338800000,
    status: taskStatuses.complete,
    name: "Lorem pusum",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
  },
  {
    id: "13",
    ownerId: "1",
    performerId: "3",
    createdAt: 1571425200000,
    status: taskStatuses.cancel,
    name: "Ненужная задача",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
  },
  {
    id: "14",
    ownerId: "2",
    performerId: "1",
    createdAt: 1571511600000,
    status: taskStatuses.pause,
    name: "На паузе для Петра",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
  },
  {
    id: "15",
    ownerId: "3",
    performerId: "2",
    createdAt: 1571598000000,
    status: taskStatuses.work,
    name: "Pusum delirium",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
  }
]
