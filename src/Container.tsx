import type { IContainerProps } from "./types";

import React, { FC, useEffect } from "react";
import { isEqual } from "lodash";

import styles from "./styles.module.css";
import le from "./le.less";

const Container: FC<IContainerProps> = ({ title = "default title - v2" }) => {
  async function k() {
    await Promise.resolve(1);
  }

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
    <div className={le.cs}>
      <span onClick={handleClick}>{title}</span>
    </div>
  );
};

export default Container;
