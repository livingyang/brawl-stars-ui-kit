<template>
  <button type="button" :class="classes" @click="onClick" :style="style" :aria-label="ariaLabel">{{ label }}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import './button.css';

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * primary or secondary button
     */
    primary?: boolean;
    /**
     * size of the button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * background color of the button
     */
    backgroundColor?: string;
    /**
     * Accessible label for the button
     */
    ariaLabel?: string;
  }>(),
  { primary: false }
);

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const ariaLabel = computed(() => props.ariaLabel || props.label);

const onClick = () => {
  emit('click', 1);
};
</script>
