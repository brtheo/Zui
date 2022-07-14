import { _LitElement } from "./inputable"

type MotionableConf = {
  target: HTMLElement,
  onEnding: () => void,
  onCancelling: () => void
}
interface IMotionable {
  enter: (conf: MotionableConf) => void
  leave: (conf: MotionableConf) => void
  _onEnding: (target: HTMLElement) => void
}


export class Motion implements IMotionable{
  public enter(conf: MotionableConf): void {
    const {target, onEnding, onCancelling} = conf
    target.classList.add('eraseContent')
    target.style.display = 'flex'
    target.classList.add('animationEnter')
    target.onanimationend = () => {
      onEnding()
      this._onEnding(target)
    }
    target.onanimationcancel = () => onCancelling
  }
  public leave(conf: MotionableConf): void {
    const {target, onEnding, onCancelling} = conf
    target.classList.add('eraseContent')
    target.classList.add('animationLeave')
    target.onanimationend = () => {
      onEnding()
      this._onEnding(target)
    }
    target.onanimationcancel = () => onCancelling
  }
  _onEnding(target: HTMLElement): void {
    target.style.display = open ? 'flex' : 'none'  
    target.classList.remove('eraseContent')
    target.classList.remove('animationEnter')
    target.classList.remove('animationLeave')
  }
}
