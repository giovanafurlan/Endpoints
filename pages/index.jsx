import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Code,
  Container,
  Flex,
  Heading,
  Tag,
  TagLabel,
  Text,
  useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const metodosInstituicao = [
  {
    nome: '/instituicao',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Listar Todas as Instituições',
    body: ''
  },
  {
    nome: '/instituicao/getById?id={id}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Detalhes da Instituição',
    body: ''
  },
  {
    nome: '/instituicao/create',
    metodo: 'POST',
    cor: 'yellow',
    descricao: 'Criação de Intituição',
    body: `Body:
    {
      "nmInstituicao": "",
      "nrCnpj": "",
      "dsPlano": "",
      "dsToken": ""
    }`
  },
  {
    nome: '/instituicao/update?id={id}',
    metodo: 'PUT',
    cor: 'blue',
    descricao: 'Atualizar Instituição',
    body: `Body:
    {
      "nmInstituicao": "",
      "nrCnpj": "",
      "dsPlano": "",
      "dsToken": ""
    }`
  },
  {
    nome: '/delete?id={id}',
    metodo: 'DELETE',
    cor: 'red',
    descricao: 'Deletar Instituição',
    body: ''
  },
  {
    nome: '/conta/oauth?email={email}&senha={senha}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Autenticação',
    body: ''
  },
]

const metodosConta = [
  {
    nome: '/conta',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Listar Todas as Contas',
    body: ''
  },
  {
    nome: '/conta/getById?cdConta={cdConta}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Detalhes da Conta',
    body: ''
  },
  {
    nome: '/conta/create?token={token}',
    metodo: 'POST',
    cor: 'yellow',
    descricao: 'Criação de Conta',
    body: `Body:
    {
      "nmConta" : "",
      "dsEmail" : "",
      "dsSenha" : "",
      "dsDocumento" : "",
      "dtNascimento" : "",
      "stConta" : ,
      "dsTipoConta": ""
  }`
  },
  {
    nome: '/conta/create?cdConta={cdConta}',
    metodo: 'PUT',
    cor: 'blue',
    descricao: 'Atualizar Instituição',
    body: `Body:
    {
      "cdConta" : ,
      "nmConta" : "",
      "dsEmail" : "",
      "dsSenha" : "",
      "dsDocumento" : "",
      "dtNascimento" : "",
      "stConta" : ,
      "dsTipoConta": ""
  }`
  }
]

const metodosCurso = [
  {
    nome: '/curso',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Listar Todas os Cursos',
    body: ''
  },
  {
    nome: '/curso?cdCursos={cdCursos}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Detalhes do Curso',
    body: ''
  },
  {
    nome: '/curso/create',
    metodo: 'POST',
    cor: 'yellow',
    descricao: 'Criação de Curso',
    body: `Body:
    {
      "nmCurso": "",
      "nmPeriodo": ""
    }`
  },
  {
    nome: '/curso/update?cdCurso={cdCurso}',
    metodo: 'PUT',
    cor: 'blue',
    descricao: 'Atualizar Instituição',
    body: `Body:
    {
      "nmCurso": "",
      "nmPeriodo": ""
    }`
  },
  {
    nome: '/curso/delete?cdCurso={cdCurso}',
    metodo: 'DELETE',
    cor: 'red',
    descricao: 'Deletar Curso',
    body: ''
  }
]

const metodosMateria = [
  {
    nome: '/materia',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Listar Todas as Matérias',
    body: ''
  },
  {
    nome: '/materia?cdMateria={cdMateria}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Detalhes da Matéria',
    body: ''
  },
  {
    nome: '/materia/create',
    metodo: 'POST',
    cor: 'yellow',
    descricao: 'Criação de Curso',
    body: `Body:
    {
      "nmMateria": "",
      "dsMateria": ""
    }`
  },
  {
    nome: '/materia/update?cdMateria={cdMateria}',
    metodo: 'PUT',
    cor: 'blue',
    descricao: 'Atualizar Matéria',
    body: `Body:
    {
      "nmMateria": "",
      "dsMateria": ""
    }`
  },
  {
    nome: '/materia/delete?cdMateria={cdMateria}',
    metodo: 'DELETE',
    cor: 'red',
    descricao: 'Deletar Matéria',
    body: ''
  }
]

const metodosCursoMateria = [
  {
    nome: '/curso/materia/',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Listar todos os Cursos Materias',
    body: ''
  },
  {
    nome: '/curso/materia/findById?cdCursoMateria={cdCursoMateria}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Detalhes do Curso Matéria',
    body: ''
  },
  {
    nome: '/curso/materia/create',
    metodo: 'POST',
    cor: 'yellow',
    descricao: 'Criação de Curso Matéria',
    body: `Body:
    {
      "materia": {
          "cdMateria": ,
          "nmMateria": "",
          "dsMateria": ""
      },
      "curso": {
          "cdCurso": ,
          "nmCurso": "",
          "nmPeriodo": ""
      }
    }`
  },
  {
    nome: '/conta/create?cdConta={cdConta}',
    metodo: 'PUT',
    cor: 'blue',
    descricao: 'Atualizar Instituição',
    body: `Body:
    {
      "cdConta" : ,
      "nmConta" : "",
      "dsEmail" : "",
      "dsSenha" : "",
      "dsDocumento" : "",
      "dtNascimento" : "",
      "stConta" : ,
      "dsTipoConta": ""
  }`
  },
  {
    nome: '/curso/materia/delete?cdCursoMateria={cdCursoMateria}',
    metodo: 'DELETE',
    cor: 'red',
    descricao: 'Deletar Matéria',
    body: ''
  }
]

const metodosTurma = [
  {
    nome: '/turma',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Listar Todas as Turmas',
    body: ''
  },
  {
    nome: '/turma/getById?cdTurma={cdTurma}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Detalhes da Turma',
    body: ''
  },
  {
    nome: '/turma/create',
    metodo: 'POST',
    cor: 'yellow',
    descricao: 'Criação de Turma',
    body: `Body:
    {
      "cdTurma": ,
      "nmTurma": "",
      "curso": {
          "cdCurso": ,
          "nmCurso": "",
          "nmPeriodo": ""
      }
  }`
  }
]

const metodosTurmaConta = [
  {
    nome: '/turma/conta/',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Listar Todas as Turmas Contas',
    body: ''
  },
  {
    nome: '/turma/conta/getById?cdTurmaConta={cdTurmaConta}',
    metodo: 'GET',
    cor: 'green',
    descricao: 'Detalhes da Turma Conta',
    body: ''
  },
  {
    nome: '/turma/create/conta',
    metodo: 'POST',
    cor: 'yellow',
    descricao: 'Criação de Turma Conta',
    body: `Body:
    {
      "turma": {
         "cdTurma": ,
         "nmTurma": "",
         "curso": {
             "cdCurso": ,
             "nmCurso": "",
             "nmPeriodo": ""
         }
     },
     "cdConta": {
         "cdConta": ,
         "nmConta": "",
         "dsEmail": "",
         "dsSenha": "",
         "dsDocumento": "",
         "dtNascimento": "",
         "stConta": ,
         "dsTipoConta": "",
         "instituicao": {
             "cdInstituicao": ,
             "nmInstituicao": "",
             "nrCnpj": "",
             "dsPlano": "",
             "dsToken": ""
         }
     }
 }`
  }
]

export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW={'6xl'}>
      <Flex 
      justifyContent={'space-between'}
      align='center'>
        <Heading
          py='10'>Endpoints</Heading>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Flex
        flexDir='column'
        mb='10'>
        <Heading
          as={'h2'}
          fontSize='2xl'
          mb='4'>Instituição</Heading>
        {metodosInstituicao.map((metodo, idx) => (
          <Conteudo
            key={idx}
            nome={metodo.nome}
            cor={metodo.cor}
            descricao={metodo.descricao}
            body={metodo.body}
            metodo={metodo.metodo} />
        ))}
      </Flex>
      <Flex
        flexDir='column'
        mb='10'>
        <Heading
          as={'h2'}
          fontSize='2xl'
          mb='4'>Conta</Heading>
        {metodosConta.map((metodo, idx) => (
          <Conteudo
            key={idx}
            nome={metodo.nome}
            cor={metodo.cor}
            descricao={metodo.descricao}
            body={metodo.body}
            metodo={metodo.metodo} />
        ))}
      </Flex>
      <Flex
        flexDir='column'
        mb='10'>
        <Heading
          as={'h2'}
          fontSize='2xl'
          mb='4'>Curso</Heading>
        {metodosCurso.map((metodo, idx) => (
          <Conteudo
            key={idx}
            nome={metodo.nome}
            cor={metodo.cor}
            descricao={metodo.descricao}
            body={metodo.body}
            metodo={metodo.metodo} />
        ))}
      </Flex>
      <Flex
        flexDir='column'
        mb='10'>
        <Heading
          as={'h2'}
          fontSize='2xl'
          mb='4'>Matéria</Heading>
        {metodosMateria.map((metodo, idx) => (
          <Conteudo
            key={idx}
            nome={metodo.nome}
            cor={metodo.cor}
            descricao={metodo.descricao}
            body={metodo.body}
            metodo={metodo.metodo} />
        ))}
      </Flex>
      <Flex
        flexDir='column'
        mb='10'>
        <Heading
          as={'h2'}
          fontSize='2xl'
          mb='4'>Curso Matéria</Heading>
        {metodosCursoMateria.map((metodo, idx) => (
          <Conteudo
            key={idx}
            nome={metodo.nome}
            cor={metodo.cor}
            descricao={metodo.descricao}
            body={metodo.body}
            metodo={metodo.metodo} />
        ))}
      </Flex>
      <Flex
        flexDir='column'
        mb='10'>
        <Heading
          as={'h2'}
          fontSize='2xl'
          mb='4'>Turma</Heading>
        {metodosTurma.map((metodo, idx) => (
          <Conteudo
            key={idx}
            nome={metodo.nome}
            cor={metodo.cor}
            descricao={metodo.descricao}
            body={metodo.body}
            metodo={metodo.metodo} />
        ))}
      </Flex>
      <Flex
        flexDir='column'
        mb='10'>
        <Heading
          as={'h2'}
          fontSize='2xl'
          mb='4'>Turma Conta</Heading>
        {metodosTurmaConta.map((metodo, idx) => (
          <Conteudo
            key={idx}
            nome={metodo.nome}
            cor={metodo.cor}
            descricao={metodo.descricao}
            body={metodo.body}
            metodo={metodo.metodo} />
        ))}
      </Flex>
    </Container>
  )
}

const Conteudo = ({ titulo, cor, metodo, nome, descricao, body }) => {
  return (
    <Accordion
      allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Flex
              flex='1'
              textAlign='left'
              gap='2'>
              <Tag
                variant='subtle'
                colorScheme={cor}>
                <TagLabel>{metodo}</TagLabel>
              </Tag>
              <Text>{nome}</Text>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {descricao}
          <br />
          <Code children={body} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}