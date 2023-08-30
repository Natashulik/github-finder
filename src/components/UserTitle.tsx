import { GithubUser } from "../types/user";
import { localDate } from "../helpers/locateDate";

interface UserTitleProps extends Pick<GithubUser, 'name' | 'login' | 'created_at'> { }

export const UserTitle = ({ name, login, created_at }: UserTitleProps) => {
  const formatedDate = localDate.format(new Date(created_at));

  return <div className='user_title'>
    <h2>{name}</h2>
    <span>Registered {formatedDate}</span>
    <h3>@ {login}</h3>
  </div>
}