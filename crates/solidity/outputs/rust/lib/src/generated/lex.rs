// This file is generated automatically by infrastructure scripts. Please don't edit by hand.

use super::kinds;
use serde::Serialize;
use std::ops::Range;
use std::rc::Rc;
#[derive(Clone, Debug, PartialEq, Eq, Serialize)]
pub enum Node {
    Chars(Range<usize>),
    Choice(usize, Rc<Node>),
    Sequence(Vec<Rc<Node>>),
    Named(kinds::Token, Rc<Node>),
}
impl Node {
    pub fn chars(range: Range<usize>) -> Option<Rc<Self>> {
        Some(Rc::new(Self::Chars(range)))
    }
    pub fn chars_unwrapped(range: Range<usize>) -> Rc<Self> {
        Rc::new(Self::Chars(range))
    }
    pub fn sequence(elements: Vec<Option<Rc<Self>>>) -> Option<Rc<Self>> {
        let elements: Vec<_> = elements.into_iter().filter_map(|e| e).collect();
        if elements.is_empty() {
            None
        } else {
            Some(Rc::new(Self::Sequence(elements)))
        }
    }
    pub fn choice(index: usize, element: Option<Rc<Self>>) -> Option<Rc<Self>> {
        element.map(|e| Rc::new(Self::Choice(index, e)))
    }
    pub fn named(kind: kinds::Token, element: Option<Rc<Self>>) -> Option<Rc<Self>> {
        element.map(|e| Rc::new(Self::Named(kind, e)))
    }
    pub fn range(&self) -> Range<usize> {
        match self {
            Node::Chars(range) => range.clone(),
            Node::Choice(_, element) => element.range(),
            Node::Sequence(elements) => {
                elements[0].range().start..elements[elements.len() - 1].range().end
            }
            Node::Named(_, element) => element.range(),
        }
    }
}