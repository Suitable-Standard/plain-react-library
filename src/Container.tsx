import type { IContainerProps } from "./types";

import React, { FC, useEffect } from "react";
import { isEqual } from "lodash";

import styles from "./styles.module.css";
import le from "./le.less";

// 编译es7语法
async function k() {
  await Promise.resolve(1);
}

const Container: FC<IContainerProps> = ({
  title = "default title - v2",
  firstName,
}) => {
  const handleClick = async () => {
    // 只打包 isEqual 这一个方法，不会将lodash全部打包
    const isEquals = isEqual(0, 1);

    console.log(isEquals);
    await k();
  };

  useEffect(() => {
    void (async () => {
      await k();
    })();
  }, []);

  return (
    <div>
      <span className={le.ddd} onClick={handleClick}>
        {title} - {firstName}
      </span>
    </div>
  );
};

export default Container;
