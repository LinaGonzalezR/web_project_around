export default class UserInfo {
  constructor({ name, job, avatar }) {
    this._nameElement = document.querySelector(name);
    this._jobElement = document.querySelector(job);
    this._avatarElement = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  setUserInfo(name, job, avatar) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
    this._avatarElement.src = avatar;
    this._avatarElement.alt = `Foto de ${name}`;
  }
}
