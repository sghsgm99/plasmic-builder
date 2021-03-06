// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8KdRBDzad7GsF8FfhtfQST
// Component: -lHRSvJhDYxb5L
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: rsiGFpz3bUbGqe/component
import Divider from "../../Divider"; // plasmic-import: Ix5F7JvzPyjAZW/component
import TextInput from "../../TextInput"; // plasmic-import: h83mOj3ZdVjBx9/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_generic_landing_page.module.css"; // plasmic-import: 8KdRBDzad7GsF8FfhtfQST/projectcss
import sty from "./PlasmicSignUpPrompt.module.css"; // plasmic-import: -lHRSvJhDYxb5L/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 0mh--bMPJbCR-A/icon
import GoogleIcon from "./icons/PlasmicIcon__Google"; // plasmic-import: DnMywljJ50E9hr/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: t48bELgJQBtSyk/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: 1qjzBJE1vaTxzX/icon
import WandIcon from "./icons/PlasmicIcon__Wand"; // plasmic-import: RW7njcXALtvunM/icon

export type PlasmicSignUpPrompt__VariantMembers = {};

export type PlasmicSignUpPrompt__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUpPrompt__VariantsArgs;
export const PlasmicSignUpPrompt__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUpPrompt__ArgsType = {};
type ArgPropType = keyof PlasmicSignUpPrompt__ArgsType;
export const PlasmicSignUpPrompt__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUpPrompt__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSignUpPromptProps {
  className?: string;
}

function PlasmicSignUpPrompt__RenderFunc(props: {
  variants: PlasmicSignUpPrompt__VariantsArgs;
  args: PlasmicSignUpPrompt__ArgsType;
  overrides: PlasmicSignUpPrompt__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__siojf)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__yNeCw)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dVfb9
            )}
          >
            {"Sign up with"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zr8Gv)}
          >
            <Button
              className={classNames("__wab_instance", sty.button___7NgOv)}
              outline={true}
              showStartIcon={true}
            >
              {"Apple"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___9C93A)}
              outline={true}
              showStartIcon={true}
              startIcon={
                <GoogleIcon
                  className={classNames(projectcss.all, sty.svg__k9QYf)}
                  role={"img"}
                />
              }
            >
              {"Google"}
            </Button>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__z8Hfv)}
          >
            <Divider
              className={classNames("__wab_instance", sty.divider__tFxua)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iuJfJ
              )}
            >
              {"Or"}
            </div>

            <Divider
              className={classNames("__wab_instance", sty.divider__chGoN)}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ib85O)}
          >
            <TextInput
              className={classNames("__wab_instance", sty.textInput__gpFGi)}
              placeholder={"Full Name" as const}
            />

            <TextInput
              className={classNames("__wab_instance", sty.textInput__l4Pab)}
              placeholder={"Email" as const}
            />

            <TextInput
              className={classNames("__wab_instance", sty.textInput__xdgSy)}
              placeholder={"Password" as const}
            />
          </p.Stack>

          <Button
            className={classNames("__wab_instance", sty.button___7KtLd)}
            color={"indigo" as const}
            endIcon={
              <WandIcon
                className={classNames(projectcss.all, sty.svg__aZjZn)}
                role={"img"}
              />
            }
          >
            {"Start your account"}
          </Button>
        </p.Stack>

        <Divider className={classNames("__wab_instance", sty.divider__s66Lp)} />

        <div className={classNames(projectcss.all, sty.freeBox__uJOpG)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tlhXl
            )}
          >
            {
              "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
            }
          </div>
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUpPrompt__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUpPrompt__VariantsArgs;
    args?: PlasmicSignUpPrompt__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUpPrompt__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignUpPrompt__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSignUpPrompt__ArgProps,
      internalVariantPropNames: PlasmicSignUpPrompt__VariantProps
    });

    return PlasmicSignUpPrompt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUpPrompt";
  } else {
    func.displayName = `PlasmicSignUpPrompt.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUpPrompt = Object.assign(
  // Top-level PlasmicSignUpPrompt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSignUpPrompt
    internalVariantProps: PlasmicSignUpPrompt__VariantProps,
    internalArgProps: PlasmicSignUpPrompt__ArgProps
  }
);

export default PlasmicSignUpPrompt;
/* prettier-ignore-end */
