import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersionNumbers";
import truncateText from "../../utils/truncateText";
import { HiEye, HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-2">
          {/* FRAGMENT: */}
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش ${project.title}`}
              onClose={() => setIsEditOpen(false)}
              open={isEditOpen}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${project.title}`}
              onClose={() => setIsDeleteOpen(false)}
              open={isDeleteOpen}
            >
              <ConfirmDelete
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    /*delete project:*/
                    onSuccess: () => setIsDeleteOpen(false) /*close modal:*/,
                  })
                }
                disabled={false}
                resourceName={project.title}
              />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={project._id} className="felx justify-center">
          <HiEye className="w-5 h-5 text-primary-800" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;

// نکته: اگه چندتا ارگومان ورودی داشته باشیم اونارو تو
// ی ابجکت میزاریم و پاس میدم ب فانکشن

// نکته: اگه دیدی پروژه داره چندین درخواست اضافی
//  میفرسته سمت بک اند پس اون بخشی باید ب صوزت کال بک مینوشتی رو درست کن =>
//   onConfirm={()=>removeProject(project._id, {
//     onSuccess: () => setIsDeleteOpen(false),
//   })}

//   مثلا اینجا اگه کال بک فانکشن نزاری هزاران درخواست میفرسته سمت بک اند

// نکته: تو بک اند این پروژه تنظیم شده ک پروژه های باز قابل حذف شدن نیستن
