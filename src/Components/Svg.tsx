import React from 'react';
import {ReactComponent as TrashIcon} from './../Assets/img/icon-trash-white.svg';
import {ReactComponent as PlusIcon} from './../Assets/img/icon-plus-white.svg';

type IconProps = {
    fill: string;
    icon: string
};

export default function ColoredTrashIcon({fill, icon}: IconProps) {  

  const listIcons = ['trash', 'plus'];
  const iconToUse = listIcons.find((i) => i === icon);

    return (
      <>
      {
        icon === 'trash' ? (
          <TrashIcon fill={fill} />
        ) : icon === 'plus' ? (
          <PlusIcon fill={fill} />
        ) : (
          <>
          {/* add new icons here */}
          </>
        )
      }
      </>
    );
  }
