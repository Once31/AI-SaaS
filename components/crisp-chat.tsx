"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ac50bd09-23e0-4041-8a56-02565196da85");
  }, []);

  return null;
};

export default CrispChat;
