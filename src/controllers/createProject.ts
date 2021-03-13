import express from "express";

interface createProjectBody {
  projectName: string;
  projectURL: string;
  owner: string;
}

const createProjectController = (
  req: express.Request,
  res: express.Response
) => {
  const body: createProjectBody = req.body;
};

export default createProjectController;
